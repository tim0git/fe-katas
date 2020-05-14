// Please do not change the name of this function
const subArrSum = (array) => {
  // acc for summing numbers in array
  let currentSum = 0;

  // acc for storing max number for comparison later
  let maxSum = 0;

  array.forEach((number, index) => {
    //set currentSum to currentSum + number or 0 which ever is greater.
    currentSum = Math.max(currentSum + number, 0);

    //compare maxSum with current Sum on every loop and set the greater
    maxSum = Math.max(currentSum, maxSum);
  });
  return maxSum;
};

module.exports = { subArrSum };
