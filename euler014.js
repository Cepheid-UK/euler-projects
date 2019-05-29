// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

var limit = 999999;
var iterations;
var chain;
var longestChain = 0;
var longestChainValue = 0;


for (i=1; i<limit; i++) {
    iterations = 0;
    if (i%2 == 0) {
        // even
        Evens(i)
        UpdateChain(iterations,i)
    } else {
        // odd
        Odds(i)
        UpdateChain(iterations,i)
    }
}

function Evens(n) {
    n = n/2
    iterations++

    if (n === 1) {
        return iterations
    }

    if (n%2 == 0) {
        n = Evens(n)
    } else {
        n = Odds(n)
    }
}

function Odds(n) {
    n = (n*3)+1
    iterations++

    if (n === 1) {
        return iterations
    }

    if (n%2 == 0) {
        Evens(n)
    } else {
        Odds(n)
    }
}

function UpdateChain(iterations, i) {
    if (iterations > longestChain) {
        longestChain = iterations;
        longestChainValue = i;
    }
}

console.log('longest chain: ' + longestChain + ' / value: ' + longestChainValue)

// not spotting the typo: if (n=1) instead of if (n==1) probably took over half the time on this problem!
// using functions here makes me think about how I could have done the prime sieves more elegantly with recursive functions