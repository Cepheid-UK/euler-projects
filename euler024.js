// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

var permutations = []
var string = ''
var target = 3 // the number of lexicographical permutations to calculate

LexPerm(9, target)
console.log(permutations[target])

function LexPerm(n, target) {

    for (i=0; i<=n; i++) {
        if (i===0) {
            var string = '0'
        } else {
            string = (string + i).toString();
        } 
    }

    // first permutation, e.g. 012345 -> n
    //permutations.push(string)

    var permutationNumber = 0;
    
    for (j=0; j<target; j++) {
        string = string.split('')
        console.log(string)

        for (k=0; k<permutationNumber; k++) {
            var tempSplice = string.splice(string.length-permutationNumber,1)
            string.splice(string.length-permutationNumber,0,tempSplice)
        }



        // for (k=string.length; k>)

        string = string.join('')
        permutations.push(string)

        permutationNumber++
    }
}

console.log(permutations)
