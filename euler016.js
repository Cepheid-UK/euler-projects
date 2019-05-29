// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

var total = 0;
var bigNumber = BigInt(Math.pow(2,1000))

bigNumber = bigNumber.toString().split('')

for (i=0; i<bigNumber.length; i++) {
    total += parseInt(bigNumber[i])
}

console.log(total)

// TIL about the BigInt type in Javascript, which I suppose is the point of this sort of exercise.