// Set 을 사용해, 중복 제거할 수 있다.
// 먼저 중복된 배열을 Set로 변환하면 새 Set는 중복 요소를 암묵적으로 제거한다. 그다음 Set를 다시 배열로 변환한다.

function solution(my_string) {
    return [...new Set(my_string.split(''))].join('');
}
