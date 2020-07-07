const RecommendTitle = (recommendTitle) => {
  return `
        <div>
        <div class="card card-outline-secondary my-4">
        <div class="card-header">추천드라마</div>
        <div class="card-body">
            <p>${recommendTitle[0]}</p>
            <small class="text-muted"></small>
            <hr>
            <p>${recommendTitle[1]}</p>
            <small class="text-muted"></small>
            <hr>
            <p>${recommendTitle[2]}</p>
            <small class="text-muted"></small>
            <hr>
            <p>${
              recommendTitle[3]
                ? recommendTitle[3]
                : '자동 추천 드라마가 존재하지 않습니다.'
            }</p>
            <small class="text-muted"></small>
            <hr>
            <p>${
              recommendTitle[4]
                ? recommendTitle[4]
                : '자동 추천 드라마가 존재하지 않습니다.'
            }</p>
            <small class="text-muted"></small>
        </div>
        </div>
    </div>
    `;
};

module.exports = RecommendTitle;
