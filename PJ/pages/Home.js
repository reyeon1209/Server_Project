const GetTitle = require('../components/GetTitle');
const GetBanner = require('../components/GetBanner');
const Footer = require('../components/Footer');
const DramaCell = require('../components/DramaCell');
const FetchData = require('../src/FetchData');

const dataToCell = (dramaData, isOnAir, idx) => {
  const dramaImg = dramaData.dramaImg;
  const dramaName = dramaData.dramaName;
  const rate = dramaData.rate;

  return DramaCell(dramaImg, dramaName, rate, isOnAir, 0, idx);
}
const OnAirDramaGrid = () => {

  const IS_ON_AIR = true;

  const onAirData = FetchData(true);
  const DramaCellArray = onAirData.map((oneDramaData, idx) =>
    dataToCell(oneDramaData, IS_ON_AIR, idx)
  );
  const OnAirDramaGrid = DramaCellArray.reduce((acc, cur) => acc + cur);

  return OnAirDramaGrid;
}

const Home = () => {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="description" content="" />
    <meta name="author" content="" />

    <title>dramarket</title>

    <!-- Bootstrap core CSS -->
    <link href="/vendor/bootstrap/css/bootstrap.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="/css/shop-homepage.css" rel="stylesheet" />
    <link href="/css/mycss.css" rel="stylesheet" />

    <link rel="stylesheet" href="/assets/css/main.css" />

    <!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/jquery.scrolly.min.js"></script>
    <script src="assets/js/jquery.scrollex.min.js"></script>
    <script src="assets/js/skel.min.js"></script>
    <script src="assets/js/util.js"></script>
    <script src="assets/js/main.js"></script>
  </head>

  <body>
    ${GetTitle()}
    <!-- Page Content -->
    <div class="container pad">
      <div class="row">

        <div class="col-lg-12">
          ${GetBanner()}

          <section id="contents">
            <div class="row">
              ${OnAirDramaGrid()}

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
  </body>
</html>

  `;
};
module.exports = Home;
