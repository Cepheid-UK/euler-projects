var increment = 0;

for (i=0; i<1000000; i++) {
    
    if (Math.log10(i)%1 == 0) {
        increment++
        console.log(i + " / " + increment)
    }
}

var string = '0123456789'