// Array.from() 메서드 : 유사 배열 객체(array-like object), 반복 가능한 객체(iterable object)를 얕게 복사해 새로운Array 객체를 만듭니다.

function solution(numbers) {
    const result = Array.from({length: numbers.length}, () => -1);
    const stack = [];
    
    for(let i = 0; i < numbers.length; i++) {
        while(stack.length > 0 && numbers[stack[stack.length -1]] < numbers[i]) {
            result[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    return result;
}