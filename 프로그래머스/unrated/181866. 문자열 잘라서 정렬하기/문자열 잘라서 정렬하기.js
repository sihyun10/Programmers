// 배열의 요소 중 빈 문자열('') 제거 방법 : .filter(i => i.length !== 0)
// 사전순으로 정렬한 배열 : .sort()

function solution(myString) {
    let split = myString.split('x');
    const result = split.filter(i => i.length !== 0)
    return result.sort();
}