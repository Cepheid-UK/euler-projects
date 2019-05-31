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

// WIP

var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
var janFirst1901 = days[(365 % 7)] // Tuesday (note 1900 is not a leap year)

var months = [31,28,31,30,31,30,31,31,30,31,30,31]; // how many days in each month
var leapMonths = [31,29,31,30,31,30,31,31,30,31,30,31];
var leap;
var firstDayOfYear = 1 // this variable stores the index of the day in days[]. e.g. 0 means it's a Monday, 2 means its a Wednesday.

var firstOfMonthSundays = 0;

for (y=1901; y<=1905; y++) {
    console.log('\n')
    console.log(y)
    if (y%4 == 0) { 
        // leap year
        leap = true;
    } else {
        leap = false;
    }

    leap ? daysInYear=366 : daysInYear=365;

    for (d=1; d<=daysInYear; d++) {
        if (firstDayOfYear == 6 && d == 1) {
            // handle first day of year
            firstOfMonthSundays++
        }
        if (getIsSunday(d,firstDayOfYear)) {
            console.log('day ' + d + ' of the year is a Sunday')

            tally = d;

            if (leap) {
                for (j=0; j<leapMonths.length; j++) {
                    if (tally>leapMonths[j]) {
                        tally -= leapMonths[j]
                    } else if (tally == 0) {
                        console.log('first month of ' + leapMonths[j] + ' month is a Sunday')
                        firstOfMonthSundays++;
                    }
                }
            } else {
                for (j=0; j<months.length; j++) {
                    if (tally>months[j]) {
                        tally -= months[j]
                    } else if (tally == 0) {
                        console.log('first month of ' + months[j] + ' month is a Sunday')
                        firstOfMonthSundays++;
                    }
                }
            }
            

            if (d/(leapMonths[0]+1) == 1) {
                console.log('the first day of february is a sunday')
            }
        }

        


    }
    firstDayOfYear = (firstDayOfYear+(daysInYear%7))%7;
    
}

console.log(firstOfMonthSundays)

function getIsSunday(day, firstDayOfYear) {

    if ((day%7) == (7-firstDayOfYear)) {
        return true
    } else {
        return false
    }
}

function getIsFirstDayOfMonth(day, leap) {

}

// This is not really the kind of problem I typically enjoy, as I find dealing with arbitrary numbers difficult to track for some reason
// 7 days a week, 31/28/29/30 days a month depending, 365 or 366 days depending. The exceptions are uncomfortable to work with.