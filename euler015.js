// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

var x = 1;
var y = 1;

for (i=1; i<40; i++) {
    x = x * i;
}

for (j=1; j<20; j++) {
    y = y * j;
}

result = x / (y*y)

console.log(result)

// in one sense, this was the easiest solution: Go to Wolfram Alpha and type in 40c20, bam.
// At least then you know what you're aiming for!