// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.

var limit = 10000
var total = 0;

var properDivisorsArray = []

for (k=1; k<limit; k++) {
    var sum = SumOfProperDivisors(Divisors(k))
    if (sum != k) {
        var dSum = SumOfProperDivisors(Divisors(sum))
        if (k==dSum) {
            console.log('Amiacble numbers found: ' + k + ' / ' + sum)
            total += sum;
        }
    }
}

console.log(total)

function SumOfProperDivisors(divisors) {
    // d(Divisors(n))
    var total = 0;
    for (i=0; i<divisors.length-1; i++) {
        total += divisors[i]
    }
    return total;
}

function Divisors(n) {
    
    var divisors = []

    // every divisor below the square root has a paired divisor above the square root.
    for (i=1; i<=Math.sqrt(n); i++) {
        if (n%i == 0) {
            divisors.push(i)
        }
    }

    // loop through the array backwards and add the paired divisor to the array.
    for (j=divisors.length-1; j>=0; j--) {
        divisors.push(n/divisors[j])
    }

    // check for square numbers and remove one of them
    if (divisors[divisors.length/2] == divisors[(divisors.length/2)-1]) {
        divisors.splice(divisors.length/2,1)
    }

    return divisors;
}

// Took me a little while to get my head around the solution code, I checked online to see what algorithms might be good for this
// and seeing other implementations exposed the bug I had, and it worked instantly.