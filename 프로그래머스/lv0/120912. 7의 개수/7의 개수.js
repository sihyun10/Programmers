// 정규표현식을 사용해, 7 문자를 모두 찾아 반환. ex) /[a0]/g: "a", 0 중에 하나를 모두 찾는다. 

function solution(array) {
    return array.join('').match(/7/g)?.length || 0
}
