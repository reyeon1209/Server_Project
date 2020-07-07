const GetTitle = require('../components/GetTitle');
const Footer = require('../components/Footer');
const CharInfo = require('../components/CharInfo');
const RecommendTitle = require('../components/RecommendTitle');
const DramaInfo = require('../components/DramaInfo');
const FetchData = require('../src/FetchData');

const drawDramaInfo = (isOnAir, year, idx) => {
  const data = FetchData(isOnAir, year);
  const dramaData = data[idx];
  const {dramaImg, dramaName, rate, content, url} = dramaData;

  return DramaInfo(dramaImg, dramaName, rate, content, url);
};

const drawCharInfo = (isOnAir, year, idx) => {
  const data = FetchData(isOnAir, year);
  const dramaData = data[idx];
  const characters = dramaData.characters;

  const charaterHTMLArray = characters.map((character) => CharInfo(character));
  const chractersHTML = charaterHTMLArray.reduce((acc, cur) => acc + cur);

  return chractersHTML;
};

const drawRecommendTitle = (isOnAir, year, idx) => {
  const data = FetchData(isOnAir, year);
  const dramaData = data[idx];
  const recommendations = dramaData['recommendTitle'];

  if (!recommendations) {
    return '자동 추천 드라마가 존재하지 않습니다.';
  }

  return RecommendTitle(recommendations);
};

const Intro = (isOnAir, year, idx) => {
  return `
        <!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>dramarket</title>

  <!-- Bootstrap core CSS -->
  <link href="/vendor/bootstrap/css/intro.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="/css/shop-item.css" rel="stylesheet">
  <link href="/css/mycss.css" rel="stylesheet">

</head>

<body>

  ${GetTitle()}


  <!-- Page Content -->
  <div class="container pad">


      <div class="col-lg-12">
        <div class="pad">

        ${drawDramaInfo(isOnAir, year, idx)}

        <!-- /.card -->
        </div>

        <div class="card card-outline-secondary my-4">
          <!-- 추천 드라마 -->
        </div>
        <!-- /.card -->
      </div>
      <!-- /.col-lg-9 -->

      <div class="row">
        ${drawCharInfo(isOnAir, year, idx)}
      </div>

      <div class="col-lg-12">
        <div class="card card-outline-secondary my-4">
          ${drawRecommendTitle(isOnAir, year, idx)}
        </div>
      </div>

    </div>
  </div>
  <!-- /.container -->

  ${Footer()}

  <!-- Bootstrap core JavaScript -->
  <script src="/vendor/jquery/jquery.min.js"></script>
  <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

</body>

</html>

    `;
};
module.exports = Intro;
