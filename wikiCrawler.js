var client = require('cheerio-httpcli');

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
     var title2020_end = [];
     var name = $(this).children('a');
     var color = $(this).parent().attr('style');
     if(color == "background-color:#E5E5E5"){
       console.log("end");
       return false;
     }
     if(color != "background-color:#FFFF99"){
       title2020_end.push(name.text());
     }
     //배열에서 공백은 제외하고 출력
     if(title2020_end != ""){
        title2020 = title2020_end;
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
