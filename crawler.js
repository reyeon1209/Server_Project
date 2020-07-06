require('./init.js');
const firebase = require('firebase/app');
const client = require('cheerio-httpcli');
var db = admin.database();

function wiki() {
    var url_2020 = "https://ko.wikipedia.org/wiki/2020%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var url_2019 = "https://ko.wikipedia.org/wiki/2019%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var url_2018 = "https://ko.wikipedia.org/wiki/2018%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var url_2017 = "https://ko.wikipedia.org/wiki/2017%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var url_2016 = "https://ko.wikipedia.org/wiki/2016%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var url_2015 = "https://ko.wikipedia.org/wiki/2015%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";

    var param = {};

    //2020
    client.fetch(url_2020, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1)").each(function(post) {
            var title2020 = [];
            var title_end_2020 = [];
            var name = $(this).children('a');
            var color = $(this).parent().attr('style');
            if(color == "background-color:#E5E5E5"){
            console.log("end");
            return false;
            }
            if(color != "background-color:#FFFF99"){
                title_end_2020.push(name.text());
            }
            //배열에서 공백은 제외하고 출력
            if(title_end_2020 != ""){
                title2020 = title_end_2020;
                console.log(title2020);
            }

            // 방영종료 드라마 출력
            // if(title2019_end != ""){
            //    console.log(title2019_end);
            // }
        });
    });


    //2019
    client.fetch(url_2019, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1) > a").each(function(post) {
            var title2019 = [];
            title2019.push($(this).text());
                console.log(title2019);
            });
        }
    );

    //2018
    client.fetch(url_2018, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1) > a").each(function(post) {
            var title2018 = [];
            title2018.push($(this).text());
                console.log(title2018);
            });
        }
    );

    //2017
    client.fetch(url_2017, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1) > a").each(function(post) {
            var title2017 = [];
            title2017.push($(this).text());
                console.log(title2017);
                });
        }
    );

    //2016
    client.fetch(url_2016, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1) > a").each(function(post) {
            var title2016 = [];
            title2016.push($(this).text());
                console.log(title2016);
            });
        }
    );

    //2015
    client.fetch(url_2015, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1) > a").each(function(post) {
            var title2015 = [];
            title2015.push($(this).text());
                console.log(title2015);
            });
        }
    );
}

function wikiOnAir() {
    var url_2020 = "https://ko.wikipedia.org/wiki/2020%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var param = {};

    //2020
    client.fetch(url_2020, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1)").each(function(post) {
            var title2020_ing = [];
            var title2020_1 = [];
            var name = $(this).children('a');
            var color = $(this).parent().attr('style');
            if(color == "background-color:#E5E5E5"){
                //console.log("end");
                return false;
            }
            if(color == "background-color:#FFFF99"){
                title2020_1.push(name.text());
            }
            //배열에서 공백은 제외하고 출력
            if(title2020_1 != ""){
                title2020_ing = title2020_1;
                //console.log(title2020_ing);
            }

            var onAirdramasRef = db.ref("/onAir");
            for (var i = 0; i < title2020_ing.length; i++) {
            onAirdramasRef.push({
                "name": title2020_ing[i]
            });
            }
        });
    });
}

function daum() { 
    var daumURL = "https://search.daum.net/search?w=tot&DA=UME&t__nil_searchbox=suggest&sug=&sugo=15&sq=" + encodeURIComponent("사이코지만 괜찮아") + "&o=2&q=" + encodeURIComponent("사이코지만 괜찮아");
    var param = {};


    client.fetch(daumURL, param, function(err, $, res){
        if(err){console.log("error");return;}

        var broadcast = $('#tvpColl > div.coll_cont > div > div.head_cont > div > a').text();
        var content = $("#tv_program > div.info_cont > dl:nth-child(3) > dd").text();
        var rate = $("#tv_program > div.info_cont > dl:nth-child(5) > dd > span:nth-child(3)").text();
        var daumURL = $("#tv_program > div.info_cont > dl:nth-child(7) > dd > a").attr("href");

        var characterImg = [];
        $("div.wrap_col.castingList > ul > li").each(function(ind) {
            if (ind == 0) return;
            characterImg.push($(this).find('img').attr("src")); 
        });

        var characterName = [];
        $("span.txt_name").each(function(ind) {
            if (ind == 0) return;
            characterName.push($(this).find('a').text()); 
        });

        var realName = [];
        $("span.sub_name").each(function(ind) {
            if (ind == 0) return;
            realName.push($(this).find('a').text()); 
        });
    });
}

function google() {
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
    });
}

module.exports.wiki;
module.exports.wikiOnAir;
module.exports.daum;
module.exports.google;