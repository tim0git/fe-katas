// Please do not change the name of this function
const justifyLine = (str, maxLineLength) => {
  // Your code here
  let regex = /\s/g;
  let strArray = str.split("");
  let n = 0;
  let delta = maxLineLength - str.length;

  str.split("").forEach((letter, index) => {
    if (delta > 0 && regex.test(letter)) {
      strArray.splice(index + n, 0, " ");
      delta--;
      n++;
    }
  });

  regex = /\s\B/g;
  str.split("").forEach((letter, index) => {
    if (delta > 0 && regex.test(letter)) {
      strArray.splice(index + n - 1, 0, " ");
      delta--;
      n++;
    }
  });
  return strArray.join("");
};

module.exports = { justifyLine };
