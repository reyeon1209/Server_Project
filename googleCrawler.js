var client = require('cheerio-httpcli');

// 다운로드
var googleURL = "https://www.google.com/search?q=" + encodeURIComponent("사이코지만 괜찮아")
            + "&oq=" + encodeURIComponent("사이코지만 괜찮아")
            + "&aqs=chrome.0.69i59j0l4j69i60l3.5126j1j7&sourceid=chrome&ie=UTF-8";
            
var param = {};

client.fetch(googleURL, param, function(err, $, res) {
    if (err) { console.log("Error:", err); return; }

    var recommendTitle = [];
    $("div.fl.ellip.oBrLN.S1gFKb.l6aqpd").each(function(ind) {
        if (ind < 5)  return;
        recommendTitle.push($(this).text()); 
    });

    console.log(recomTitle);

    // document.getElementById("demo").innerHTML = recomTitle;
    // 다운로드한 결과물 화면에 출력
    //var body = $.html();
    //console.log(body);
});