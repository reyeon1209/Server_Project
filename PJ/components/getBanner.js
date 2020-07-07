const getBanner = () => {
    return `
          <section id="banner">
    				<div class="inner">

              <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img class="d-block img-fluid" src="/banner3.png" alt="First slide" style="width:1000px;height:200px">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="/banner2.png" alt="First slide" style="width:1000px;height:200px">
                  </div>
                  <div class="carousel-item">
                    <img class="d-block img-fluid" src="/banner1.png" alt="First slide" style="width:1000px;height:200px">
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
    				</div>
    			</section>

    `;
}
module.exports = getBanner;
