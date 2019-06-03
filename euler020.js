// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

var hundredFactorial = 0n
var total = 0;

hundredFactorial = factorial(100)

hundredFactorial = hundredFactorial.toString().split('')

for (i=0; i<hundredFactorial.length; i++) {
    total += parseInt(hundredFactorial[i])
}

console.log(total)

function factorial(n) {
    // Typical algorithm for generating factorials.
    if (n==0n || n==1n) {
        return 1n;
    } else {
        return BigInt(n) * BigInt(factorial(n-1))
    }
}

// This was no big issue once I learned the algorithm for factorials. Although when I went back to problem 16 to remind myself how
// I split the strings up, when I ran 16 again (on a different computer) it actually failed. So something is different with
// BigInt()... I don't know what though.