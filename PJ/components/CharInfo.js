const CharInfo = (characters) => {
  return `
        <div class="col-lg-4 col-md-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="${characters.img}" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
              </h4>
              <h5>${characters.characterName}</h5>
              <p class="card-text">${characters.realName}</p>
            </div>
            <div class="card-footer">
            </div>
          </div>
        </div>
    `;
};

module.exports = CharInfo;
