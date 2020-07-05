const client = require('cheerio-httpcli');
const delay = require('delay');

const url =
  'https://search.naver.com/search.naver?sm=top_hty&fbm=0&ie=utf8&query=%EB%93%9C%EB%9D%BC%EB%A7%88';
const param = {};

const pageHandler = (err, $, res) => {
  const cilcker = async () => {
    const queryToDayWeek =
      '.api_subject_bx > .tab_area > .sort_option > ._root_week > .ly_pop > .day_week';

    const queryToWholeDay =
      queryToDayWeek + ' > .check_area._list > ol > li > a';
    const queryToApply = queryToDayWeek + ' > a';

    console.log($(queryToWholeDay).html());
    $(queryToWholeDay).trigger('click');

    await delay(500);
    console.log($(queryToWholeDay).html());
  };

  if (err) {
    console.log(err);
    return;
  }

  cilcker();
};

client.fetch(url, param, pageHandler);
