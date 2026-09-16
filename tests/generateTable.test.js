const generateTable = require("../src/generateTable");

test("generates a multiplication table from prime numbers", () => {
  expect(generateTable([2, 3, 5])).toEqual([
    ["", 2, 3, 5],
    [2, 4, 6, 10],
    [3, 6, 9, 15],
    [5, 10, 15, 25]
  ]);
});
test("return a blank table for an empty array", () => {
    expect(generateTable([])).toEqual([
        [""]
    ]);
});