const generatePrimes = require("../src/generatePrimes")

test("returns the first 3 prime numbers", () => {
    expect(generatePrimes(3)).toEqual([2, 3, 5])
})
test("returns an empty array if n is 0", () => {
    expect(generatePrimes(0)).toEqual([])
})
test("throws an error if n is negative", () => {
    expect(() => generatePrimes(-1)).toThrow(
        "n must be a non-negative integer"
    );
});
test("throws an error if n is not an integer", () => {
    expect(() => generatePrimes(2.5)).toThrow(
        "n must be a non-negative integer"
    );
})
test("throws an error if n is not a number", () => {
    expect(() => generatePrimes("3")).toThrow(
        "n must be a non-negative integer"
    );
});
test("finds the first 10 prime numbers", () => {
    expect(generatePrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
})