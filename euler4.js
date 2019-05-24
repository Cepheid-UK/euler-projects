// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

for (var i=900; i<999; i++) {
    for (var j=900; j<999; j++) {
        var product = i * j
        if (isPalindrome(product)) {
            console.log(i+' x '+j+' = '+product)
        }
    }
}

function isPalindrome(value) {
    var reversed = value.toString().split('').reverse().join('');

    if (reversed == value) {
        return true;
    } else {
        return false;
    }
}

// this lists all the results from 900 to 999 that are palindromes.

// could also use parseInt() for good practice.