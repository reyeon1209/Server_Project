var client = require('cheerio-httpcli');

var url_2020 = "https://ko.wikipedia.org/wiki/2020%EB%85%84_%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%EC%9D%98_%ED%85%94%EB%A0%88%EB%B9%84%EC%A0%84_%EB%93%9C%EB%9D%BC%EB%A7%88_%EB%AA%A9%EB%A1%9D";

var param = {};

//2020
client.fetch(url_2020, param, function(err, $, res){
  if(err){console.log(err);return;}



   $(".sortable >tbody>tr>td:nth-child(1)").each(function(post) {
     var title2019_ing = [];
     var title2019_end = [];
     var name = $(this).children('a');
     var color = $(this).parent().attr('style');
     if(color == "background-color:#E5E5E5"){
       console.log("end");
       return false;
     }
     if(color == "background-color:#FFFF99"){
       title2019_ing.push(name.text());
     }
     else{
       title2019_end.push(name.text());
     }

     //배열에서 공백은 제외하고 출력
     if(title2019_ing != ""){
        console.log(title2019_ing);
     }

     // 방영종료 드라마 출력
     // if(title2019_end != ""){
     //    console.log(title2019_end);
     // }
   }
 );
 }
);
