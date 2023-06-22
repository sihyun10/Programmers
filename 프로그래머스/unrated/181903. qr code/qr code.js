// 풀이방법
// 1) 문자열 code의 각 인덱스를 정수 q로 나눈다. 2) 나눈 값이 정수 r이면 그 문자열의 값 추출한다. 3) 순차적으로 이어붙인다.

function solution(q, r, code) {
    
    let result = "";
        
    for(let i=0; i < code.length; i++) {
        if (i % q === r) {
            result += code[i];
        }
    }
    
    return result;
}