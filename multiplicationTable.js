// Please do not change the name of this function
const multiplicationTable = (num) => {
  // Your code here
  let arr = [];
  if (num > 0) {
    for (let i = 0; i < num + 1; i++) {
      arr.push([i]);
      for (let j = 1; j < num + 1; j++) {
        if (i > 1) {
          arr[i].push(i * j);
        } else {
          arr[i].push(j);
        }
      }
    }
  }
  return arr;
};

module.exports = { multiplicationTable };
