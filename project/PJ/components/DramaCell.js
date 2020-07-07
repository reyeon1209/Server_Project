const Drama = (dramaImg, dramaName, rate, isOnAir, year, idx) => {
  return `
        <div class="col-lg-6 col-md-6 mb-6">
        <div class="card h-100">
        <div class="card-body">
            <a href="#"><img class="card-img-top" src="/${dramaImg}" alt=""></a>
            <div class="card-text">
            <h4 class="card-title">
                <a href="/intro?isOnAir=${isOnAir?"true":"false"}&year=${year ? year : 0}&idx=${idx}">${dramaName}<br></a>
            </h4>
            <h5>최고시청률 : ${rate}</h5>
            </div>
        </div>
        </div>
    </div>
        `;
};

module.exports = Drama;
