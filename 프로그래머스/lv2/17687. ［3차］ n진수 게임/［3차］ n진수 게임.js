function solution(n, t, m, p) {
    const answer = [];
    let num = 0;
    let count = 0;
    let currentOrder = 1; // 현재 차례

    while (count < t) {
        const numStr = num.toString(n).toUpperCase();
    
        for (let i = 0; i < numStr.length; i++) {
            if (currentOrder % m === p || (p === m && currentOrder % m === 0)) {
                answer.push(numStr[i]);
                count += 1;
                if (count === t) break;
            }
            currentOrder += 1;
        }
        num += 1;
    }
    return answer.join('');
}