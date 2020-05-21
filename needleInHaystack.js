// Please do not change the name of this function
let arr = [];
const needleHaystack = (haystack, needle) => {
  let regex = new RegExp(needle, "i");
  for (let i in haystack) {
    if (regex.test(haystack[i])) {
      arr.push(i);
      return arr;
    } else if (typeof haystack[i] === "object") {
      arr.push(i);
      needleHaystack(haystack[i], needle);
    }
  }
  return arr;
};
module.exports = { needleHaystack };
