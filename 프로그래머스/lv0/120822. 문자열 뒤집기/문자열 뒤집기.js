// 문자열 뒤집기 하는 법
// 1) .split() 메서드를 통해, 배열로 분할한다. 2) .reverse() 메서드를 통해, 배열 순서를 뒤집는다. 3) .join() 메서드를 통해 배열의 모든 요소를 문자열로 결합한뒤 return 한다.

function solution(my_string) {
    return my_string.split('').reverse().join('');
}