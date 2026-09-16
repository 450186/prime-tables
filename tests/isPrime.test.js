const isPrime = require("../src/isPrime");

test("returns false for numbers less than 2", () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-1)).toBe(false);
});
test("returns true for 2", () => {
    expect(isPrime(2)).toBe(true);
})
test("returns true for 3", () => {
    expect(isPrime(3)).toBe(true);
})
test("returns false for 4", () => {
    expect(isPrime(4)).toBe(false);
})
test("returns false for perfect squares", () => {
    expect(isPrime(49)).toBe(false);
})
test("returns true for larger prime", () => {
    expect(isPrime(101)).toBe(true);
})
test("returns false for larger non-prime", () => {
    expect(isPrime(100)).toBe(false);
})
test("returns false for non-integer numbers", () => {
    expect(isPrime(2.5)).toBe(false);
})
test("returns false for non-number values", () => {
    expect(isPrime("7")).toBe(false);
});