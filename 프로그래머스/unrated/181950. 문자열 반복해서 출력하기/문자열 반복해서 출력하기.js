const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    
    // 'String.prototype.repeat()'함수를 사용해 문자열 반복
    const result = str.repeat(n);
    console.log(result);
});