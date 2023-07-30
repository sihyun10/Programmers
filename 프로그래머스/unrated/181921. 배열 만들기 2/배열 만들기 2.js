function solution(l, r) {
    let result = [];

    for (let num = l; num <= r; num++) {
        if (String(num).match(/^[05]+$/)) {
            result.push(num);
        }
    }
    if (result.length === 0) return [-1];
    
    return result;
}
