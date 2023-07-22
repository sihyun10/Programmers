// 10진법 => 3진법 => 앞 뒤 반전 => 10진법

function solution(n) {
    const number3 = n.toString(3);
    const reverseNumber = number3.split('').reverse().join('');
    return parseInt(reverseNumber, 3);
}