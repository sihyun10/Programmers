function solution(babbling) {
    let count = 0;
    
    for(let i = 0; i < babbling.length; i++) {
        // "ayaaya", "yeye", "woowoo", "mama"와 같이 한 번 이상 반복되는 경우 찾기
        if (/(aya|ye|woo|ma)\1+/g.test(babbling[i])) {
            continue;
        }
        if (/^(aya|ye|woo|ma)+$/g.test(babbling[i])) {
            count += 1;
        }
    }
    return count;
}