var fs = require("fs");

// Asynchronous read
fs.readFile('runo.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
})

// Synchronous read

var data = fs.readFileSync('runo.txt');
console.log("Synchronous read: " + data.toString());

console.log("program ended");


