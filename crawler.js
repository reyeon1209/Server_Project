require('./init.js');
const firebase = require('firebase/app');
const client = require('cheerio-httpcli');
var db = admin.database();

function wiki(crawlYear) {
    var param = {};
    let currentYear = new Date().getFullYear();
    var url = "https://ko.wikipedia.org/wiki/"+ year +
            "%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var titleList = [];
    
    if (crawlYear == currentYear) { // ex) 2020 방영종료
        client.fetch(url, param, function(err, $, res){
            if(err){console.log(err);return;}
    
            $(".sortable >tbody>tr>td:nth-child(1)").each(function(post) {
                var temp = [];
                var name = $(this).children('a');
                var color = $(this).parent().attr('style');
                if(color == "background-color:#E5E5E5"){
                //console.log("end");
                return false;
                }
                if(color != "background-color:#FFFF99"){
                    temp.push(name.text());
                }
                //배열에서 공백은 제외하고 출력
                if(temp != ""){
                    titleList = temp;
                    //console.log(titleList);
                }
    
            });
        });

        return titleList;
    }
    
    else { // ex) 2015 ~ 2019
        client.fetch(url, param, function(err, $, res){
            if(err){console.log(err);return;}
    
            $(".sortable >tbody>tr>td:nth-child(1) > a").each(function(post) {
                titleList.push($(this).text());
                //console.log(titleList);
                });
            }
        );
        
        return titleList;
    }
}

function wikiOnAir() {
    let currentYear = new Date().getFullYear();
    var url = "https://ko.wikipedia.org/wiki/"+ currentYear +
            "%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";
    var titleList = [];

    client.fetch(url, param, function(err, $, res){
        if(err){console.log(err);return;}

        $(".sortable >tbody>tr>td:nth-child(1)").each(function(post) {
            var temp = [];
            var name = $(this).children('a');
            var color = $(this).parent().attr('style');
            if(color == "background-color:#E5E5E5"){
                //console.log("end");
                return false;
            }
            if(color == "background-color:#FFFF99"){
                temp.push(name.text());
            }
            //배열에서 공백은 제외하고 출력
            if(temp != ""){
                titleList = temp;
            }
        });
    });

    return titleList;
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

module.exports.daumCrawler = daum;
module.exports.googleCrawler = google;
module.exports.wikiCrawler = wiki;
module.exports.wikiOnAirCrawler = wikiOnAir;