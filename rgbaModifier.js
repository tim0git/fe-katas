// Please do not change the name of this function
const rgbaModifier = (rgbaStr, percent, opacity) => {
  const rgbaStrArray = rgbaStr.replace(/[rgba()]/gi, "").split(",");
  const collectArray = Array();
  rgbaStrArray.forEach((string) => {
    if (parseInt(string) > 1) {
      const newVal = (parseInt(string) * percent) / 100 + parseInt(string);
      newVal > 255
        ? collectArray.push(255)
        : collectArray.push(Math.ceil(newVal));
    }
  });
  return `rgba(${collectArray[0]},${collectArray[1]},${collectArray[2]},${opacity})`;
};

module.exports = { rgbaModifier };
