const { rgbaModifier } = require("../rgbaModifier");

describe("rgbaModifier()", () => {
  it("can set transparency to 1", () => {
    expect(rgbaModifier("rgba(100,100,100,0.6)", 50, 1)).toEqual(
      "rgba(150,150,150,1)"
    );
  });
  it("can set transparency to 0.5", () => {
    expect(rgbaModifier("rgba(50,100,20,0.6)", 20, 0.4)).toEqual(
      "rgba(60,120,24,0.4)"
    );
  });
  it("should change rgb by negative number", () => {
    expect(rgbaModifier("rgba(44,70,180,0.9)", -30, 0.3)).toEqual(
      "rgba(31,49,126,0.3)"
    );
  });
  it("should not exceed 255", () => {
    expect(rgbaModifier("rgba(225,60,160,1)", 90, 0.7)).toEqual(
      "rgba(255,114,255,0.7)"
    );
  });
  it("does not return less than 0", () => {
    expect(rgbaModifier("rgba(50,78,12,0.8)", -100, 0.5)).toEqual(
      "rgba(0,0,0,0.5)"
    );
  });
});
