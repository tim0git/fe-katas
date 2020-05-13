const { binarySearch } = require("../binarySearch");

describe("binarySearch()", () => {
  test("when passed an array of three consecutive numbers return index 1", () => {
    const input = [1, 2, 3];
    const searchParamter = 2;
    expect(binarySearch(input, searchParamter)).toBe(1);
  });
  test("can find element in rhs of array", () => {
    const input = [1, 2, 3, 4, 5];
    const searchParamter = 4;
    expect(binarySearch(input, searchParamter)).toBe(3);
  });
  test("can find element in lhs of array", () => {
    const input = [1, 2, 3, 4, 5];
    const searchParamter = 2;
    expect(binarySearch(input, searchParamter)).toBe(1);
  });
  test("can find element in end rhs of array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const searchParamter = 10;
    expect(binarySearch(input, searchParamter)).toBe(9);
  });
  test("can find element in start lhs of array", () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const searchParamter = 1;
    expect(binarySearch(input, searchParamter)).toBe(0);
  });
  test("can find element in end rhs of array", () => {
    const input = [1, 2, 3, 5, 6, 7, 8, 9, 10];
    const searchParamter = 4;
    expect(binarySearch(input, searchParamter)).toBe(-1);
  });
  test("can find element in end rhs of array", () => {
    const input = ["a", "b", "c", "d", "e", "f", "g"];
    const searchParamter = "f";
    expect(binarySearch(input, searchParamter)).toBe(5);
  });
});
