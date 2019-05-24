// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10,001st prime number?

var limit = 1000000

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

console.log(primes[10000])

// this one required a bit of looking up in order to
// understand how a sieve of eratosthanes is implemented in code

// It generates an array of primes up to 1,000,000 (about 74,000 primes) 
// then I just take the 10000th index of the array.

// it creates an array of size = to limit, fills it with "true"
// then it iterates through the values and replaces the "true" with "false" where there are factors

// then just take the index of the array for the value