// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

value = 20;

while (true) {
    var divisors = 0;
    for (i=20; i>0; i--) {
        if (value % i == 0) {
            divisors++
            if (divisors == 20) {
                console.log(value)
                break;
            }
        }
    }
    value += 20;
}

// this actually runs indefinitely until it finds values, but I just manually stop it after the first result.