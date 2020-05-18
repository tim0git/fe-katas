// Please do not change the name of this function
const vowelShift = (str, n) => {
  let arr = str.match(/[aeiou]/gi) || [];
  // slice the array at -1
  arr = arr.slice(-n % arr.length).concat(arr.slice(0, -n % arr.length))
  // why am i passing a func to replace? // 
  return str.replace(/[aeuio]/gi, ()=> arr.shift());
}

module.exports = { vowelShift }
