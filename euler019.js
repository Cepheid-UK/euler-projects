// You are given the following information, but you may prefer to do some research for yourself.

// 1 Jan 1900 was a Monday.
// Thirty days has September,
// April, June and November.
// All the rest have thirty-one,
// Saving February alone,
// Which has twenty-eight, rain or shine.
// And on leap years, twenty-nine.
// A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

var sundays = 0;

for (y=1901; y<=2000; y++) {
    for (m=0; m<12; m++) {
        var date = new Date(y,m,1);
        if (date.getDay() == 0) {
            sundays++
        }
    }
}

console.log(sundays)


// Initially I tried to do this by first principles, counting the months and days manually, but eventually this proved to be
// fairly tedious and I used the built-in Date() function.

// I was quite confused that I was getting "172" when using 'new Date(y, m, 0) assuming 0 was the first index of the days in
// a month. I'm still not sure why it even resolved the "0th" day of the month, could that be the last day of the previous month?