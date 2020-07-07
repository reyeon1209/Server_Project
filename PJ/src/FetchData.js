const data = require('../data/DB.json');

const FetchData = (isOnAir, year) => {
  let key;
  if (isOnAir === true || isOnAir === 'true') {
    key = 'onAir';
  } else {
    key = year;
  }

  const dramaObject = data[`${key}`];
  const dramaArray = Object.values(dramaObject);
  dramaArray.sort(function(a, b){
    return parseFloat(a.rate) > parseFloat(b.rate) ? -1 : parseFloat(a.rate) < parseFloat(b.rate) ? 1 : 0;
  });
  return dramaArray;
};
module.exports = FetchData;
