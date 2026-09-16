const isPrime = require("./isPrime");

function generatePrimes(n) {
    if(n < 0 || !Number.isInteger(n)) {
        throw new Error("n must be a non-negative integer");
    }
    
    const primes = [];
    let candidate = 2;
    
    while (primes.length < n) {
        if(isPrime(candidate)) {
            primes.push(candidate);
        }
        candidate++;
    }

    return primes;
}

module.exports = generatePrimes;