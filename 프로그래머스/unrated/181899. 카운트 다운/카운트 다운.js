function solution(start, end) {
    let result = [];
    
    for (let i = start; i >= end; i--) {
        result.push(i); // 배열 추가 함수 (push())
    }
    
    return result;
}