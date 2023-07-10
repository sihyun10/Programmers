// Math.max() 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환한다.

function solution(numbers) {
    let result = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            result.push(numbers[i] * numbers[j]);
        }
    }
    
    return Math.max(...result);
}
