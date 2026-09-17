function isValidInput(input) {
    return Number.isInteger(input) && input > 0;
}

module.exports = isValidInput;