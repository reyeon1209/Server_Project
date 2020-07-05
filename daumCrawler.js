var client = require('cheerio-httpcli');
var url = "https://search.daum.net/search?w=tot&DA=UME&t__nil_searchbox=suggest&sug=&sugo=15&sq=" + encodeURIComponent("사이코지만 괜찮아") + "&o=2&q=" + encodeURIComponent("사이코지만 괜찮아");
var param = {};


client.fetch(url, param, function(err, $, res){
    if(err){console.log("error");return;}

    var broadcast = $('#tvpColl > div.coll_cont > div > div.head_cont > div > a').text();
    var content = $("#tv_program > div.info_cont > dl:nth-child(3) > dd").text();
    var rate = $("#tv_program > div.info_cont > dl:nth-child(5) > dd > span:nth-child(3)").text();
    var url = $("#tv_program > div.info_cont > dl:nth-child(7) > dd > a").attr("href");

    var characterimg = [];
    $("div.wrap_col.castingList > ul > li").each(function(index) {
        if (index == 0) return;
        characterimg.push($(this).find('img').attr("src"));
    });

    var charactername = [];
    $("span.txt_name").each(function(ind) {
        if (index == 0) return;
        charactername.push($(this).find('a').text());
    });

    var realname = [];
    $("span.sub_name").each(function(ind) {
        if (index == 0) return;
        realname.push($(this).find('a').text());
    });
});
