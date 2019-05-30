// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?

// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

var upToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var hundred = 'hundred'
var and = 'and'
var total = 0;

for (i=0; i<=1000; i++) {
    total += getNumberAsWords(i).length
}

function getNumberAsWords(value) {
    n = value.toString().split('')
    numberOfDigits = n.length;

    if (numberOfDigits == 1) {
        return upToNineteen[n]
    }

    if (numberOfDigits == 2) {
        if (n[0] == 1) {
            return upToNineteen[value]
        } else {
            return tens[n[0]] + upToNineteen[n[1]]
        }
    }

    if (numberOfDigits == 3) {
        if (n[1] == 0 && n[2] != 0) 
        {   // 2ND DIGIT IS 0: e.g. 501
            return upToNineteen[n[0]] + hundred + and + tens[n[1]] + upToNineteen[n[2]]
        } else if (n[1] == 1) {
            // TEENS: e.g. 217
            var teen = n[1] + n[2]
            return upToNineteen[n[0]] + hundred + and + tens[n[1]] + upToNineteen[teen]
        } else if (n[1] == 0 && n[2] == 0) {
            // HUNDREDS: e.g. 400
            return upToNineteen[n[0]] + hundred
        } else {
            // ALL OTHERS: e.g. 445
            return upToNineteen[n[0]] + hundred + and + tens[n[1]] + upToNineteen[n[2]]
        }
        
    }

    if (numberOfDigits == 4) {
        return 'onethousand'
    }
}

console.log(total)

// Initially I wasn't looking forward to solving this one as I knew it would be a lot of debugging If statements and string concats. 
// It wasn't as bad as I thought, There were less cases to check for than I initially had feared.