function generateTable(primes) {
    const table = [];
    const headerRow = [];
    headerRow.push("");

    for (let i = 0; i < primes.length; i++) {
        headerRow.push(primes[i]);
    }

    table.push(headerRow);
    

    for (let i = 0; i < primes.length; i++) {
        const row = [];

        row.push(primes[i]);

        for (let j = 0; j < primes.length; j++) {
            row.push(primes[i] * primes[j]);
        }
        table.push(row);
    }

    return table;
}

module.exports = generateTable;