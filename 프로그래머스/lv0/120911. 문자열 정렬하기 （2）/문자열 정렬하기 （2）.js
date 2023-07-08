// 소문자로 변경 : toLowerCase()
// sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환하기때문에 배열로 만들어주어야한다.
// Tip) split()은 빈 배열이 아니라 빈 문자열을 포함한 배열을 반환. 문자열과 separator가 모두 빈 문자열일 때는 빈 배열을 반환함. ex) "Hi"를 split('')로 호출하면 ["H", "i"] 문자열의 각 문자가 개별적 배열 요소로 분할
// join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다. ex) const elements = ['Fire', 'Air', 'Water']; console.log(elements.join('')); / output: "FireAirWater"

function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}
