function isPowerOf2(n) {
    return Math.log(n) % Math.log(2) === 0;
}

var increment = 0;

for (i=0; i<150; i++) {
    if (isPowerOf2(i)) {
        console.log(i)
        increment++
        console.log(i + " / " + increment)
        
    }
}