function isPrime(number) {
    if(number < 2 || !Number.isInteger(number)) return false;
    if(number === 2) return true;
    if(number % 2 === 0) return false;

    const sqrt = Math.sqrt(number);

    for(let i = 3; i <= sqrt; i += 2) {
        if(number % i === 0) return false;
    }
    return true;
}

module.exports = isPrime;