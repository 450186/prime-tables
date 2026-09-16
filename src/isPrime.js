function isPrime(number) {
    if(number < 2 || !Number.isInteger(number)) return false;

    const sqrt = Math.sqrt(number);

    for(let i = 2; i <= sqrt; i++) {
        if(number % i === 0) return false;
    }
    return true;
}

module.exports = isPrime;