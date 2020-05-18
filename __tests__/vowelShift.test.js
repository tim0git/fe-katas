const { vowelShift } = require("../vowelShift");

describe("vowelShift()", () => {
  it("foi, 1 = fio", () => {
    expect(vowelShift("foi", 1)).toBe("fio");
  });
  it("hello, 1 = holle", () => {
    expect(vowelShift("hello", 1)).toBe("holle");
  });
  it("hello child, 1 = hille chold", () => {
    expect(vowelShift("hello child", 1)).toBe("hille chold");
  });
  it("star nosed mole, 2 = stor nesad mole", () => {
    expect(vowelShift("star nosed mole", 2)).toBe("stor nesad mole");
  });
  it("funnily enough, 4 = finnely onuugh", () => {
    expect(vowelShift("funnily enough", 4)).toBe("finnely onuugh");
  });
});
