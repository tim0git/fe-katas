// Please do not change the name of this function
const simplifyDirections = (directions) => {
  let arr = [];

  directions.forEach((direction) => {
    if (direction === "WEST") {
      if (arr.includes("EAST")) {
        let removeIndex = arr.indexOf("EAST");
        arr.splice(removeIndex, 1);
      } else {
        arr.push(direction);
      }
    } else if (direction === "NORTH") {
      if (arr.includes("SOUTH")) {
        let removeIndex = arr.indexOf("SOUTH");
        arr.splice(removeIndex, 1);
      } else {
        arr.push(direction);
      }
    } else if (direction === "SOUTH") {
      if (arr.includes("NORTH")) {
        let removeIndex = arr.indexOf("NORTH");
        arr.splice(removeIndex, 1);
      } else {
        arr.push(direction);
      }
    } else if (direction === "EAST") {
      if (arr.includes("WEST")) {
        let removeIndex = arr.indexOf("WEST");
        arr.splice(removeIndex, 1);
      } else {
        arr.push(direction);
      }
    }
  });
  return arr;
};

module.exports = { simplifyDirections };
