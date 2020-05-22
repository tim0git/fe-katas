const { parseHexInt } = require("../parseHexInt");

describe("parseHexInt()", () => {
  it("should ff equal 255 as 15 * 16 + 15 * 1 = 255", () => {
    expect(parseHexInt("ff")).toBe(255);
  });
  it("should ff equal 255 as 15 * 16 + 15 * 1 = 255", () => {
    expect(parseHexInt("f")).toBe(15);
  });
  it("should 17f to equal 383", () => {
    expect(parseHexInt("17f")).toBe(383);
  });
  it("should d4e89 to equal 872073", () => {
    expect(parseHexInt("d4e89")).toBe(872073);
  });
});
