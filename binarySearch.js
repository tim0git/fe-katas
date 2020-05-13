// Please do not change the name of this function
const binarySearch = (arr, searchParameter) => {
  // Your code here
  let L = 0; let R = arr.length - 1;
  
  while (L <= R) {
    // loop through array, find the middle and compare it against searchParameter.
    let middle = Math.floor((L + R) / 2);
    // if searchParameter == middle return middle.
    if (arr[middle] === searchParameter) return middle; //condition 1
    // else if middle is < searchParameter set left hand side to be middle +1. (rhs only)
    // run loop again ^^ see conditon 1
    else if (arr[middle] < searchParameter) L = middle + 1;
    // esle set right to be middle -1  
    else R = middle - 1;
  }
  return -1;
};

module.exports = { binarySearch };