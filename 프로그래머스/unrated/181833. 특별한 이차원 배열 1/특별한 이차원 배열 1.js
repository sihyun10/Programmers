function solution(n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if(i === j) row.push(1);
            else row.push(0);
        }
        answer.push(row);
    }
    return answer;
}