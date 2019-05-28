// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a² + b² = c²
// For example, 3² + 4² = 9 + 16 = 25 = 5².

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var m = 2;
var n = 1;
var a = 0;
var b = 0;
var c = 0;

for (m=2; m<25; m++) {
    for (n=1; n<m; n++) {
        a = (m*m) - (n*n)
        b = 2*(m*n)
        c = (m*m) + (n*n)
        sum = a+b+c
        if (sum === 1000) {
            console.log ('a = ' + a + ', b = ' + b + ', c = ' + c + ', sum = ' + sum + ', product = ' + a*b*c)
        }
            
    }
}

// There are some quite interesting visualisations and implications to pythagorean triples. May consider using them for generating predictable numbers for terrain generation.