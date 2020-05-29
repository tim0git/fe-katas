const { multiplicationTable } = require("../multiplicationTable");

describe("multiplicationTable()", () => {
  it("should return table for 0", () => {
    expect(multiplicationTable(0)).toEqual([]);
  });
  it("should return table for 1", () => {
    expect(multiplicationTable(1)).toEqual([
      [0, 1],
      [1, 1],
    ]);
  });
  it("should return table for 3 ", () => {
    expect(multiplicationTable(3)).toEqual([
      [0, 1, 2, 3],
      [1, 1, 2, 3],
      [2, 2, 4, 6],
      [3, 3, 6, 9],
    ]);
  });
  it("should return table for 5 ", () => {
    expect(multiplicationTable(5)).toEqual([
      [0, 1, 2, 3, 4, 5],
      [1, 1, 2, 3, 4, 5],
      [2, 2, 4, 6, 8, 10],
      [3, 3, 6, 9, 12, 15],
      [4, 4, 8, 12, 16, 20],
      [5, 5, 10, 15, 20, 25],
    ]);
  });
});
