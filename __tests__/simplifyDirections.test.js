const { simplifyDirections } = require("../simplifyDirections");

describe("simplifyDirections()", () => {
  it('NORTH", "SOUTH", "WEST" ', () => {
    expect(simplifyDirections(["NORTH", "SOUTH", "WEST"])).toEqual(["WEST"]);
  });
  test('"NORTH", "WEST", "SOUTH", "WEST", "EAST"', () => {
    expect(
      simplifyDirections(["NORTH", "WEST", "SOUTH", "WEST", "EAST"])
    ).toEqual(["WEST"]);
  });
  test('"NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"', () => {
    expect(
      simplifyDirections(["NORTH", "EAST", "SOUTH", "WEST", "NORTH", "NORTH"])
    ).toEqual(["NORTH", "NORTH"]);
  });
});
