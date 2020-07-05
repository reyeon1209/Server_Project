var puppeteer = require('puppeteer');

(async () => {
    // const browser = await puppeteer.launch();    // test X
    const browser = await puppeteer.launch({
        headless : false
    }); // test
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920, height: 1080
    }); // test

    // 페이지 이동
    await page.goto('https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EB%93%9C%EB%9D%BC%EB%A7%88&oquery=%EB%93%9C%EB%9D%BC%EB%A7%88&tqi=UwbU8sp0Yidss4VUcHKssssssgN-305868');
    await page.waitFor(500);

    // 요일 클릭 -> 전체 클릭 -> 적용하기 클릭
    const btnSelectElHandle = await page.$('.sort_title._trigger_week');
    await btnSelectElHandle.click();
    await page.waitFor(500);

    const btnSelectWholeDayElHandle = await page.$('.check_area._list a[data-multi="false"]');
    btnSelectWholeDayElHandle.click();
    await page.waitFor(500);

    const btnApply = await page.$('.btn_apply._apply');
    await btnApply.click();
    await page.waitFor(500);

    const data = {};

    //제목, 상세 페이지 url
    var temp = await page.$('.bd_title > a');
    data.title = await page.evaluate((data) => {
      return data.textContent;
    }, temp);
    data.url = await page.evaluate((data) => {
      return data.href;
    }, temp);

    //방송국
    temp = await page.$('.bd_info > a');
    data.broadcast = await page.evaluate((data) => {
      return data.textContent;
    }, temp);

    //방영 시간
    temp = await page.$('.bd_info > span');
    data.day = await page.evaluate((data) => {
      return data.textContent;
    }, temp);

    //시청률
    temp = await page.$('.rating_data > em');
    data.rate = await page.evaluate((data) => {
      return data.textContent;
    }, temp);

    console.log(data);

    // 정보 가져오기

    // 다음 클릭
    // const btnNext = await page.$('.btn_page._btn_next');
    // await btnNext.click();

    // 정보 가져오기

    await page.waitFor(10000); // test
    await browser.close();
})();