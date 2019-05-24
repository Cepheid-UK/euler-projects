// The sum of the squares of the first ten natural numbers is,

// 1² + 2² + ... + 10² = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)² = 55² = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var total = 0
var sum = 0

for (i=1; i<=100; i++) {
    total += i*i
    sum += i
}

var sumSquared = sum * sum

console.log(sumSquared - total)

// strange that problem 6 is preceeded by 5 problems that are all much harder in my opinion.