const { justifyLine } = require("../justifyLine");

describe("justifyLine()", () => {
  it("should add one space to first space in string", () => {
    const str = "foo foo foo foo";
    expect(justifyLine(str, 16)).toEqual("foo  foo foo foo");
  });
  it("should add one space to each space in string", () => {
    const str = "foo foo foo foo";
    expect(justifyLine(str, 18)).toEqual("foo  foo  foo  foo");
  });
  it("should add two space to firs two and one to last space", () => {
    const str = "foo foo foo foo";
    expect(justifyLine(str, 20)).toEqual("foo   foo   foo  foo");
  });
});
