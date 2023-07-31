const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const n = Number(input[0]);
    drawTriangle(n);
});

function drawTriangle(n) {
    for(let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j <= i; j++) {
            row += '*';
        }
        console.log(row);
    }
}