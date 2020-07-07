const data = require('../data/DB.json');

const fetchData = (isOnAir, year) => {

    console.log('fetch isOn' + typeof isOnAir);
  let key;
  if (isOnAir === true || isOnAir === 'true') {
    key = 'onAir';
  } else {
    key = year;
  }

  const dramaObject = data[`${key}`];
  const dramaArray = Object.values(dramaObject);

  return dramaArray;
};
module.exports = fetchData;
