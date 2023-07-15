function solution(n) {
    let index = 1;
    let count = 0;
    
    while (index <= n) {
        if(n % index === 0) {
            count += 1;
        } index += 1;
    }
    return count;
}