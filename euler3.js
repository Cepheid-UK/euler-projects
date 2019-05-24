// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var target = 600851475143
var largestFactor

while (target % 2 == 0) {
    largestFactor = 2;
    target = target/2;
}
i = 3;
while (target!= 1) {
    while (target % i == 0) {
        largestFactor = i;
        target = target/i;
    }
    i += 2;
}

console.log(largestFactor)