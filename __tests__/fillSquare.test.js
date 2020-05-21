const { fillSquare } = require("../fillSquare");

describe("fillSquare()", () => {
  it("should fill square 3 wide", () => {
    const square = [[1, 2, 3], [1, 2], [1]];
    const output = [
      [1, 2, 3],
      [1, 2, null],
      [1, null, null],
    ];
    expect(fillSquare(square)).toEqual(output);
  });
  it("should fill square 3 wide", () => {
    const square = [[1, 2, 3], [1, 2, 3, 4, 5, 6], [1]];
    const output = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, 4, 5, 6],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
      [null, null, null, null, null, null],
    ];
    expect(fillSquare(square)).toEqual(output);
  });
  it("should fill square 3 wide", () => {
    const square = [[1, 2, 3], [1, 2, 3], [1], [], [1, 2, 3], [1]];
    const output = [
      [1, 2, 3, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null],
      [null, null, null, null, null, null],
      [1, 2, 3, null, null, null],
      [1, null, null, null, null, null],
    ];
    expect(fillSquare(square)).toEqual(output);
  });
});
