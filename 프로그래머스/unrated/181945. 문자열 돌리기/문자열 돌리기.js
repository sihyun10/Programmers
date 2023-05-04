const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    const str = input[0];

    const rows = str.length; // 문자열의 길이 만큼 행이 필요
    
    for (let i = 0; i < rows; i++) { 
        console.log(str[i]);
    }
});