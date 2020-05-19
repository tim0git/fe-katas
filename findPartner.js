// Please do not change the name of this function
const findPartner = (students, directions) => {
  // Your code here
  let array = Array();
  let arrayDepth = 0;
  let arrayPosition = 0;

  students[0].forEach((student, index) => {
    if (directions[index] === "right") {
      if (index + 1 < students[0].length) {
        array.push(students[arrayDepth][arrayPosition + 1]);
        arrayPosition = arrayPosition + 1;
      }
    } else if (directions[index] === "left") {
      if (index - 1 < 0) {
        array.push(students[arrayDepth][students[arrayPosition].length - 1]);
        arrayPosition = students[arrayPosition].length - 1
      } else {
        array.push(students[arrayDepth][arrayPosition - 1]);
        arrayPosition = arrayPosition - 1;
      }
    } else if (directions[index] === "up") {
      if (arrayDepth === 1) {
        arrayDepth = 0;
      }
    } else if (directions[index] === "down") {
      if (arrayDepth === 0) {
        arrayDepth = 1;
        array.push(students[arrayDepth][arrayPosition]);
      }
    }
  });
  //console.log(array);
  return array;
};

module.exports = { findPartner };
