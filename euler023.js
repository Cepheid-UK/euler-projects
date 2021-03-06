// A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

// A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

// As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

// Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

var abundants = []
var total = 0;

// creates an array of all abundant numbers 1 to 28123
for (k=1; k<=28123; k++) {
    var isPerfect = IsPerfect(k)
    if (isPerfect === 'abundant') {
        abundants.push(k)
    }
}

// creates an array full of 'false'
var sumOfAbundants = new Array(28123)
sumOfAbundants.fill(false)

var total = 0;

// to sum two numbers, we need to iterate through the array twice (2x for loops) then add together the values
// if a number is a sum of two abundants, it becomes a 'true' in the array.
for (l=0; l<abundants.length; l++) {
    for (m=0; m<abundants.length; m++) {
        if (abundants[l] + abundants[m] <= 28123) {
            sumOfAbundants[abundants[l]+abundants[m]] = true;
        }
    }
}

// sum the index of all 'false' in the array
for (x=0; x<sumOfAbundants.length; x++) {
    if (!sumOfAbundants[x]) {
        total += x
    }
}

console.log(total)

function IsPerfect(n) { // returns 'perfect' if perfect, 'abundant' if abundant and 'deficient' if deficient.
    var properDivisors = Divisors(n)
    var total = 0;
    properDivisors.pop() // remove the last divisor, which is the number itself.

    for (i=0; i<properDivisors.length; i++) {
        total += properDivisors[i]
    }

    if (total == n) {return 'perfect'}
    if (total > n) {return 'abundant'}
    if (total < n) {return 'deficient'}
}

function Divisors(n) { // from problem 21 
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

// A record 7 for loops in this result. There is probably a slightly more efficient way to structure this code, but this works nicely.