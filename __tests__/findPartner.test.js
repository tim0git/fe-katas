const { findPartner } = require("../findPartner");

const students = [
  ["Sam", "Harriet", "Mitch", "Jonny", "JD", "Kavita"],
  ["Amul", "Chris", "Mauro", "Ruth", "Haz", "Joshua"],
];

describe("findPartner()", () => {
  it("should work for a posative movement in an array", () => {
    expect(findPartner(students, ["right"])).toEqual(["Harriet"]);
  });
  it("should work for a negative moevemnt in the array", () => {
    expect(findPartner(students, ["left"])).toEqual(["Kavita"]);
  });
  it("should work for multiple posative movements", () => {
    expect(findPartner(students, ["right", "right", "right"])).toEqual([
      "Harriet",
      "Mitch",
      "Jonny",
    ]);
  });
  it("should not add the person if the position cannot be reached", () => {
    expect(findPartner(students, ["right", "up", "up"])).toEqual(["Harriet"]);
  });
  it("should be able to access bith top and bottom arrays in a negative and psoative fashion", () => {
    expect(findPartner(students, ["right", "down", "left"])).toEqual([
      "Harriet",
      "Chris",
      "Amul",
    ]);
  });
  it("should not exceed the end of the first array", () => {
    expect(
      findPartner(students, [
        "right",
        "right",
        "right",
        "right",
        "right",
        "right",
      ])
    ).toEqual(["Harriet", "Mitch", "Jonny", "JD", "Kavita"]);
  });
  it("should not exceed the end of the first array", () => {
    expect(findPartner(students, ["left", "left", "left", "left"])).toEqual([
      "Kavita",
      "JD",
      "Jonny",
      "Mitch",
    ]);
  });
});

/*
Rules:

1. This array allows you to loop horizontally but not vertically. i.e. if you are at the leftmost item and go left again it will take you to the rightmost item in the same array. However, if you at the top of the array and try to go up, you will stay where you are.

2. You can assume you always start at position `[0, 0]` (top left corner) and that you don't need to add the starting person to the results.

3. Directions will be either;
   `up, down, left, right`

4. If you go up/down and you cannot move, then do not add that person on to the list again.

You can use these examples to start building up your test suite:

```
findPartner(students, ['right'])
  // -> ['Harriet']
```

```
findPartner(students, ['left'])
  // -> ['Kavita']
```

```
findPartner(students, ['right', 'right', 'right'])
  // -> ['Harriet', 'Mitch', 'Jonny']
```

```
findPartner(students, ['right', 'up', 'up'])
  // -> ['Harriet']
```
*/
