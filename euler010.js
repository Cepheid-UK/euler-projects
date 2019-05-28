// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// -------

// Use problem 7 code, change limit to 2 million, then sum every entry in the array

var limit = 2000000

var sieve = function(limit) {

    var truefalseArray = []
    var primes = []
    var upToSquared = parseInt(Math.sqrt(limit))

    for (i=0; i<limit; i++) {
        truefalseArray.push(true)
    }
    
    for (i=2; i<=upToSquared; i++) {
        if (truefalseArray[i]) {
            for (j=i*i; j<limit; j+=i) {
                truefalseArray[j] = false;
            }
        }
    }
    
    for (i=2; i<limit; i++) {
        if (truefalseArray[i]) {
            primes.push(i);
        }
    }

    return primes;
}

primes = sieve(limit)

// Only a few lines of code to change from problem 7

var sumOfPrimes = 0

primes.forEach(value => {
    sumOfPrimes += value;
});

// Learned a lot about prime sieves from this and problem 7. For much larger primes, a more efficient sieve would be better. I expect I'll see a problem later on that requires this.