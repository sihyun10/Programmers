// 그 정수의 각 자리 숫자의 합을 9로 나눈 나머지와 같다.

function solution(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    return sum % 9;
}
