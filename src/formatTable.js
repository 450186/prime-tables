function formatTable(table) {
    let maxValue = 0;

    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            if (table[i][j] > maxValue) {
                maxValue = table[i][j];
            }
        }
    }
    let columnWidth = String(maxValue).length + 1;

    let output = "";

    for (let i = 0; i < table.length; i++) {
        for(let j = 0; j < table[i].length; j++) {
            output += String(table[i][j]).padStart(columnWidth);
        }
        output += "\n";
    }

    return output;
}

module.exports = formatTable;