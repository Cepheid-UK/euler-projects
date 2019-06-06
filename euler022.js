// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

const fs = require('fs');
var nameString;
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

fs.readFile('euler022.txt', 'utf8', (err, data) => {
    if (err) throw err;
    handleNames(data.toString())
})

function handleNames(string) {
    let regex = /[A-Z]*[^","]/g // take all A-Z characters that are grouped, ignore ","

    // all the names now as string elements in an array:
    var names = (string.match(regex))
    names.sort()
    console.log(names)

    var total = 0;

    for (i=0; i<names.length; i++) {
        name = names[i].split('')
        for (j=0; j<name.length; j++) {
            total += (alphabet.indexOf(name[j])+1)*(i+1)
        }

    }
    
    console.log(total)
}
