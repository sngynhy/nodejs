<<<<<<< HEAD
var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

// Async
console.log(2);
// fs.readFile(path[, options], callback)
fs = fs.readFile('data.txt', {encoding:'utf8'}, (err, data) => {
    if (err) throw err;
    console.log(3);
    console.log(data);
});
=======
var fs = require('fs');

// Sync
console.log(1);
var data = fs.readFileSync('data.txt', {encoding:'utf8'});
console.log(data);

// Async
console.log(2);
// fs.readFile(path[, options], callback)
fs = fs.readFile('data.txt', {encoding:'utf8'}, (err, data) => {
    if (err) throw err;
    console.log(3);
    console.log(data);
});
>>>>>>> fbbe559c19d519f30e63834d3d49e92d52170b55
console.log(4);