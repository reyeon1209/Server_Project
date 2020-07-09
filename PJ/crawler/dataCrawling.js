var myCrawler = require('./crawling.js');
// Admin SDK 사용할 경우
var admin = require('firebase-admin');
var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://server-project-1593785765774.firebaseio.com"
});

var db = admin.database();

var dramaDataCrawler = async (dramaList, year) => {
    var arrDramaCrawlPromises = [];
  
    for (let dramaName of dramaList) {
      var whenDaumDramaDataCrawled = myCrawler.daumCrawler(dramaName);
      var whenGoogleDramaDataCrawled = myCrawler.googleCrawler(dramaName);
  
      var whenTwoCrawlerFinished = Promise.all([
        whenDaumDramaDataCrawled,
        whenGoogleDramaDataCrawled,
      ]);
  
      arrDramaCrawlPromises.push(whenTwoCrawlerFinished); // promise들의 모음
    }
  
    var crawlerResult = await Promise.all(arrDramaCrawlPromises);
  
    dramaDataList = crawlerResult.map(arrTwoCrawlerResult => {
      var [daumData, googleData] = arrTwoCrawlerResult;
      var dramaData = Object.assign(daumData, googleData);
      console.log(dramaData);
      
      var dramaRef = db.ref("/" + year);
      dramaRef.push(dramaData);   // DB에 넣기
      return dramaData;
  })

  //return dramaDataList;
};

module.exports = dramaDataCrawler;
  