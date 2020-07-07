const DramaInfo = (dramaImg, dramaName, rate, content, url) => {
  return `
    <div class="col-lg-12">
    <div>

    <div class="card mt-4">
      <img class="card-img-top img-fluid" src="${dramaImg}" alt="">
      <div class="card-body">
        <h3 class="card-title">${dramaName}</h3>
        <h4>${rate}</h4>
        <p class="card-text">${content}</p>
        <hr>
        <a href="${url}" class="btn btn-success">공식 홈페이지</a>
      </div>
    </div>
    <!-- /.card -->
    </div>

  </div>
    `;
};

module.exports = DramaInfo;
