# Prime Tables

A Node.js application that generates a multiplication table using the first N prime numbers.

## Requirements
- Node.js
- npm

## Installation
Clone the repository and install the dependencies:

```bash
npm install
```
## Usage
Run the application by typing `npm start` in the terminal.
You will then be prompted to enter a number of prime numbers for the multiplication table.

As an example, if you were to enter the number 4, it produces:
```bash
     2  3  5  7
  2  4  6 10 14
  3  6  9 15 21
  5 10 15 25 35
  7 14 21 35 49
```
## Testing
This project uses Jest for unit testing.
The test suite covers prime number checking, prime generation, multiplication table generation, table formatting and input validation.

To run all tests:
```
npm test
```
to run all tests with coverage:
```
npm test -- --coverage
```
## Approach
The application is separated into smaller functions, with each function responsible for a specific part of creating the multiplication table.

The flow of the project goes as follows:

1. Get the user's input.
2. Validate the user's input - making sure it is a positive integer greater than 0
3. Generate the number of prime numbers requested by the user.
4. Generate the table - work out the multiplications of each possibility.
5. Format the table - line up the rows and columns to make it easier for the user to read.
6. Output the completed multiplication table.
### Prime Number Generation
To start off with, the program checks whether a number is prime or not. The first step is checking that the number is an integer greater than 1. Any number that doesn't meet these conditions cannot be a prime number.

The number 2 is then handled separately because it is the only even prime number. This allows the program to immediately reject all other even numbers, as they will always be divisible by 2. This makes the algorithm more efficient as there is no need to perform any further checks on even numbers.

The algorithm uses `Math.sqrt()` to find the square root of the number. This is for efficiency purposes. Take 49 for example, if we find the square root of the number, then we only need to check up to that square root (in this case 7) as opposed to having to check every number up to the original number. Any factor larger than the square root would have a corresponding factor smaller than the square root, which would have already been checked.

As even numbers have already been accounted for, the algorithm then only checks odd potential divisors, further reducing the number of checks required.
## Project Structure
- `src/index.js` - CLI entry point and user input
- `src/isPrime.js` - Checks whether a number is prime
- `src/generatePrimes.js` - Generates the requested number of primes
- `src/generateTable.js` - Creates the multiplication table
- `src/formatTable.js` - Formats the table for terminal output
- `src/isValidInput.js` - Validates user input
- `tests/` - Jest unit tests