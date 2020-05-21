// Please do not change the name of this function
const fillSquare = (arr) => {
  // iterate through second level of arrays to find the longest one.

// create an array of subArray lengths
  let arrayLengths = [];
  arr.forEach((subArr) => {
    arrayLengths.push(subArr.length);
  });

  //declare max length..
  let maxLength = 0;

  // which is bigger the longest subArray or the length of the original array?
  Math.max(...arrayLengths) > arr.length
    ? (maxLength = Math.max(...arrayLengths))
    : (maxLength = arr.length);

  // declare an array to fill with null values
  let retArray = Array();

  // fill array with null values, & create the grid.
  let i = 0;
  do {
    i = i + 1;
    retArray.push(new Array(maxLength).fill(null, 0, maxLength));
  } while (i < maxLength);

  // splice in values from origian array of arrays.
  arr.forEach((subArr, indexArray) => {
    subArr.forEach((value, indexValue) => {
      retArray[indexArray].splice(indexValue, 1, value);
    });
  });

  return retArray;
};

module.exports = { fillSquare };
