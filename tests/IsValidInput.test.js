const isValidInput = require("../src/isValidInput");

test("returns true for valid input", () => {
    expect(isValidInput(5)).toBe(true);
    expect(isValidInput(15)).toBe(true);
});
test("returns false for non-numerical values", () => {
    expect(isValidInput("hello")).toBe(false);
    expect(isValidInput(NaN)).toBe(false);
    expect(isValidInput("15")).toBe(false);
});
test("returns false for non-integer values", () => {
    expect(isValidInput(5.5)).toBe(false);
    expect(isValidInput(15.5)).toBe(false);
});
test("returns false for zero or negative values", () => {
    expect(isValidInput(0)).toBe(false);
    expect(isValidInput(-5)).toBe(false);
    expect(isValidInput(-15)).toBe(false);
});