// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

var permutations = [];
var string = '0123456789';
var limit = 1000000; // 1 million
var kValue;
var lValue;

permutations.push(string)

for (i=0; i<=limit; i++) {

// 1) Find the largest index k such that a[k] < a[k + 1]. If no such index exists, the permutation is the last permutation.
// 2) Find the largest index l greater than k such that a[k] < a[l].
// 3) Swap the value of a[k] with that of a[l].
// 4) Reverse the sequence from a[k + 1] up to and including the final element a[n].

    string = string.toString().split('');

    var last = string.length;
    var k = last-1;

    while(string[k-1] >= string[k]) {
        k = k-1; 
    }

    var l = last;

    while(string[l-1] <= string[k-1]) {
        l = l-1;
    }

    string = swap(k-1,l-1,string)

    k++
    l = last

    while (k < l) {
        swap(k-1,l-1,string)
        k++
        l--
    }

    string = string.join('')
    permutations.push(string)
}

console.log(permutations[limit-1])

function swap(i,j,array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    return array;
}