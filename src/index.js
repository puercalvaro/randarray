var Shuffle = require('shuffle');
var deck = Shuffle.shuffle();
var card = deck.draw();
var fs = require('fs');

var n = [100, 1000, 5000, 10000, 50000,
    100000, 200000,400000, 600000,800000,
    1000000, 2000000, 3000000,4000000, 5000000,
    6000000, 7000000, 8000000,9000000,10000000];

while(n.length !== 0) {
var arr = Array.from({length: n[0]}, (_, i) => i + 1)
var arr2 = Shuffle.shuffle({deck: arr})
//console.log(Object.values(arr2.cards).toString())
var arr3 = arr2.cards
var arr4 = ''
for (let i = 0; i < arr3.length-1; i++) {
    arr4 += arr3[i] + '\n'
}
arr4 += arr3[arr3.length-1]

//console.log(arr4)
//console.log(n[0])

fs.writeFile("./src/arrays/" + n[0] + ".txt", arr4, function (err){
    if (err) {
        console.log(err);
    } else {
        console.log("File saved");
    }
});

n.shift()
}