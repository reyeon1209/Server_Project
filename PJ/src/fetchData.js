const data = require('../data/DB.json');

const fetchData = (isOnAir, year) => {

    //console.log('fetch isOn' + typeof isOnAir);
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
  console.log(dramaArray);

  return dramaArray;
};
module.exports = fetchData;