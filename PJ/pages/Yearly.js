const GetTitle = require('../components/GetTitle');
const Footer = require('../components/Footer');
const DramaCell = require('../components/DramaCell');
const FetchData = require('../src/FetchData');

const dataToCell = (dramaData, isOnAir, year, idx) => {
  const dramaImg = dramaData.dramaImg;
  const dramaName = dramaData.dramaName;
  const rate = dramaData.rate;
  return DramaCell(dramaImg, dramaName, rate, isOnAir, year, idx);
};
const YearlyDramaGrid = (year) => {
  const IS_ON_AIR = false;

  const yearlyData = FetchData(false, year);
  const DramaCellArray = yearlyData.map((oneDramaData, idx) =>
    dataToCell(oneDramaData, IS_ON_AIR, year, idx)
  );
  const YearlyDramaGrid = DramaCellArray.reduce((acc, cur) => acc + cur);

  return YearlyDramaGrid;
};

const Yearly = (year) => {
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
  <link href="/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="/css/shop-homepage.css" rel="stylesheet">
  <link href="/css/mycss.css" rel="stylesheet">

  <style>
    a.list-group-item:hover {
      background-color: #9DE0E7;
    }
  </style>

</head>

<body>
  ${GetTitle()}
  <!-- Navigation -->

  <div class="col-lg-2 col-md-2 mb-2 years pad">
    <h3 class="my-4">${year}년도</h3>
    <div class="list-group">
      <a href="/end/2020" class="list-group-item">2020</a>
      <a href="/end/2019" class="list-group-item">2019</a>
      <a href="/end/2018" class="list-group-item">2018</a>
      <a href="/end/2017" class="list-group-item">2017</a>
      <a href="/end/2016" class="list-group-item">2016</a>
      <a href="/end/2015" class="list-group-item">2015</a>

    </div>
  </div>
  <!-- Page Content -->
  <div class="container pad">

    <div class="row">

      <!-- /.col-lg-3 -->

      <div class="col-lg-12">

        <!-- 배너 광고 부분 -->

        <section id="contents">

        <div class="row">
          ${YearlyDramaGrid(year)}

        </div>
        <!-- /.row -->
      </section>

      </div>
      <!-- /.col-lg-9 -->

    </div>
    <!-- /.row -->

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
module.exports = Yearly;
