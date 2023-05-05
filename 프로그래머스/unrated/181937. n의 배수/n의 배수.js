function solution(num, n) {
    let result = 0;
    
    // 나머지 %
    if (num % n === 0) {
        result = 1;
    } else {
        result = 0;
    }
    
    return result;
}