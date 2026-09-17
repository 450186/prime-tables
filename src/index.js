const readline = require('readline');
const generatePrimes = require("./generatePrimes");
const generateTable = require("./generateTable");
const formatTable = require("./formatTable");
const isValidInput = require("./isValidInput");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('How many prime numbers would you like to see? ', (answer) => {
    const n = Number(answer);
    if(!isValidInput(n)) {
        console.log("Please enter a positive integer.");
        rl.close();
        return;
    }
    const primes = generatePrimes(n);
    const table = generateTable(primes);
    console.log(formatTable(table));

    rl.close();
})