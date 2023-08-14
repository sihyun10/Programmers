function solution(num, total) {
    const first = Math.ceil(total / num) - Math.floor(num / 2);
    const end = Math.floor(total / num) + Math.floor(num / 2);
    
    let result = [];
    for(let i = first; i <= end; i++) {
        result.push(i);
    }
    
    return result;
}