const formatTable = require("../src/formatTable");

test("formats a multiplication table", () => {
    expect(formatTable([
        ["", 2, 3, 5],
        [2, 4, 6, 10],
        [3, 6, 9, 15],
        [5, 10, 15, 25]
    ])).toBe(
        "     2  3  5\n" +
        "  2  4  6 10\n" +
        "  3  6  9 15\n" +
        "  5 10 15 25\n"
    );
});
test("formats a blank table", () => {
    expect(formatTable([[""]])).toBe("  \n");
});