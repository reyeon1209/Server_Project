var client = require('cheerio-httpcli');

function wiki(crawlYear) {
    var param = {};
    let currentYear = new Date().getFullYear();
    var url = "https://ko.wikipedia.org/wiki/" + crawlYear +
        "%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var titleList = [];

    var whenFetched = new Promise((resolve, reject) => {
        client.fetch(url, param, function (err, $, res) {
            if (err) { console.log(err); return; }

            if (crawlYear == currentYear) { // ex) 2020 방영종료
                $(".sortable >tbody>tr>td:nth-child(1)").each(function() {
                    var temp = "";
                    var name = $(this).children('a');
                    var color = $(this).parent().attr('style');
                    if(color == "background-color:#E5E5E5"){
                    //console.log("end");
                    return false;
                    }
                    if(color != "background-color:#FFFF99"){
                        temp = name.text();
                    }
                    //배열에서 공백은 제외하고 출력
                    if(temp != ""){
                        titleList.push(temp);
                    }
         
                });
            }

            else { // ex) 2015 ~ 2019
                if (err) { console.log(err); return; }

                $(".sortable >tbody>tr>td:nth-child(1) > a").each(function (post) {
                    titleList.push($(this).text());
                });
            }

            resolve(titleList);
        });
    });

    return whenFetched;
}

function wikiOnAir() {
    var param = {};
    let currentYear = new Date().getFullYear();
    var url = "https://ko.wikipedia.org/wiki/" + currentYear +
        "%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var titleList = [];

    var whenFetched = new Promise((resolve, reject) => {
        client.fetch(url, param, function (err, $, res) {
            if (err) { console.log(err); return; }

            $(".sortable >tbody>tr>td:nth-child(1)").each(function (post) {
                var temp = "";
                var name = $(this).children('a');
                var color = $(this).parent().attr('style');
                if (color == "background-color:#E5E5E5") {return false;}
                if (color == "background-color:#FFFF99") {
                    temp = name.text();
                }
                
                if (temp != "") {   //배열에서 공백은 제외하고 출력
                    titleList.push(temp);
                }
            });

            resolve(titleList);
        });
    });

    return whenFetched;
}

function daum(dramaName) {
    var daumURL = "https://search.daum.net/search?w=tot&DA=UME&t__nil_searchbox=suggest&sug=&sugo=15&sq=" + encodeURIComponent(dramaName)
        + "&o=2&q=" + encodeURIComponent(dramaName);
    var param = {};

    var whenFetched = new Promise((resolve, reject) => {
        client.fetch(daumURL, param, function (err, $, res) {
            if (err) { console.log("error"); return; }

            var dramaImg = $("#tv_program > div.info_cont > div.wrap_thumb > a > img").attr("src");
            var broadcast = $('#tvpColl > div.coll_cont > div > div.head_cont > div > a').text();
            var content = $("#tv_program > div.info_cont > dl:nth-child(3) > dd").text();
            var rate = $("#tv_program > div.info_cont > dl:nth-child(5) > dd > span:nth-child(3)").text();
            var url = $("#tv_program > div.info_cont > dl:nth-child(7) > dd > a").attr("href");
            var characterImg = [];
            $("div.wrap_col.castingList > ul > li").each(function (ind) {
                if (typeof ($(this).find('img').attr("src")) == "undefined") characterImg.push(null);
                else characterImg.push($(this).find('img').attr("src"));
            });

            var characterName = [];
            $("span.txt_name").each(function (ind) {
                characterName.push($(this).find('a').text());
            });

            var realName = [];
            $("span.sub_name").each(function (ind) {
                realName.push($(this).find('a').text());
            });

            var characters = [];
            len = characterImg.length;
            if (len >= 5) len = 5;
            for (let i = 0; i < len; i++) {
                characters.push({
                    img: characterImg[i],
                    characterName: characterName[i],
                    realName: realName[i]
                });
            }

            if (typeof dramaImg == "undefined") dramaImg = null;
            if (typeof dramaName == "undefined") dramaName = null;
            if (typeof broadcast == "undefined") broadcast = null;
            if (typeof content == "undefined") content = null;
            if (typeof rate == "undefined") rate = null;
            if (typeof url == "undefined") url = "#";

            var resultObject = {
                dramaName,
                dramaImg,
                broadcast,
                content,
                rate,
                url,
                characters
            };
            
            resolve(resultObject);
        });
    });

    return whenFetched;
}

function google(dramaName) {
    var googleURL = "https://www.google.com/search?q=" + encodeURIComponent(dramaName)
        + "&oq=" + encodeURIComponent(dramaName)
        + "&aqs=chrome.0.69i59j0l4j69i60l3.5126j1j7&sourceid=chrome&ie=UTF-8";

    var param = {};
    var recommendTitle = [];

    var whenFetched = new Promise((resolve, reject) => {
        client.fetch(googleURL, param, function (err, $, res) {
            if (err) { console.log("Error:", err); return; }

            /*
             $("div.wrap_col.castingList > ul > li").each(function (ind) {
                if (ind == 0) return;
                characterImg.push($(this).find('img').attr("src"));
            });
            */
            $('div[data-attrid*="kc:/tv/tv_program:sideways"] > div.zVvuGd.MRfBrb > div.PZPZlf.MRfBrb.kno-vrt-t').each(function (ind) {
                recommendTitle.push($(this).text());
            });

            var resultObject = {
                recommendTitle
            };

            resolve(resultObject);
        });
    });

    return whenFetched;
}

module.exports.daumCrawler = daum;
module.exports.googleCrawler = google;
module.exports.wikiCrawler = wiki;
module.exports.wikiOnAirCrawler = wikiOnAir;