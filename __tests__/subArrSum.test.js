const { subArrSum } = require("../subArrSum");

describe("subArrSum()", () => {
  it("returns `6` which is the sum of: `[4, -1, 2, 1]", () => {
    expect(subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });
  it("returns `36` which is the sum of: `[9, 8, 7, -3, 6, 5, 4]", () => {
    expect(subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])).toEqual(36);
  });
  it("returns `22` which is the sum of: `[2, 9, -4, -3, 8, -10, 20]", () => {
    expect(subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])).toEqual(22);
  });
});

/*## Examples

`subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])`
// returns `6` which is the sum of: `[4, -1, 2, 1]`;

`subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])`
// returns `36` which is the sum of: `[9, 8, 7, -3, 6, 5, 4]`;

`subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])`
// returns `22` which is the sum of: `[2, 9, -4, -3, 8, -10, 20]`;
*/
