// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환합니다.

function solution(my_string, n) {
    return [...my_string].map(x => x.repeat(n)).join('');
}