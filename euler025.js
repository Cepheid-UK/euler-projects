// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

var firstTerm = 0n;
var secondTerm = 1n;
var index = 0;

while (true) {
    index++
    var x = firstTerm;
    var y = secondTerm;
    
    firstTerm = y;
    secondTerm = x + y;

    if (firstTerm.toString().split('').length >= 1000) {
        console.log(index)
        break;
    }
}

// Nice and easy one thanks to BigInt again. Otherwise there would be a lot of manipulating strings like problem 13