// 특정 원하는 길이만큼 문자열을 자르는 방법 : substr() 이용. substr(start,length)
// 배열 안의 문자열을 숫자로 바꾸는 방법 : map() 이용. map 메소드로 Number 함수를 각 원소마다 실행시켜주면 된다 => .map(Number)

function solution(intStrs, k, s, l) {
    let ret = [];
    
    for(let i=0; i < intStrs.length; i++) {
        if (intStrs[i].substr(s,l) > k) {
            ret.push(intStrs[i].substr(s,l));
        }
    }
    return ret.map(Number);
}