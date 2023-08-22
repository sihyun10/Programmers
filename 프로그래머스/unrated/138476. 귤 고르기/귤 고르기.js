function solution(k, tangerine) {
    const obj = {};
    
    tangerine.forEach((n) => {
        obj[n] = ++obj[n] || 1;
    });
    const frequencyValues = Object.values(obj).sort((a, b) => b - a);
    
    let result = 0;
    let sum = 0;
    
    for(let num of frequencyValues) {
        sum += num;
        result += 1;
        if(k <= sum) {
            break;
        }
    }
    return result;
}