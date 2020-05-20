// Please do not change the name of this function
const findMostRepeated = (arr) => {
  if (arr.length === 0) return { elements: [], repeats: null };
  let obj = {};
  // make ref obj..
  arr.forEach((item, index) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1;
    } else {
      obj[item] = 1;
    }
  });
  // loop through ref object and push max into new object.
  let retObject = {};
  let acc = 1;
  for (key in obj) {
    if (obj[key] > acc) {
      acc = obj[key];
      retObject = {};
      retObject[key] = obj[key];
    } else if (obj[key] === acc) {
      retObject[key] = obj[key];
    }
  }
  if (Object.keys(retObject).length === 0) {
  } else if (Object.entries(retObject)[0][1] === 1) {
    return { elements: [], repeats: null };
  } else {
    return {
      elements: Object.keys(retObject),
      repeats: Object.entries(retObject)[0][1],
    };
  }
};

module.exports = { findMostRepeated };
