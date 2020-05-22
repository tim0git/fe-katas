// Please do not change the name of this function
const parseHexInt = (str) => {
  const hexLookup = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };
  let acc = 0;
  for (let i = 0; i < str.length; i++) {
    hex = hexLookup[str[i].toUpperCase()];
    acc = acc * 16 + hex;
  }
  return acc;
};
module.exports = { parseHexInt };
