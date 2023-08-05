function solution(score) {
    let result = [];
    for(let i = 0; i < score.length; i++) {
        const [a,b] = score[i];
        result.push((a + b) / 2);
    }
    
    const rankingArr = [...result].sort((a,b) => b-a); // 내림차순
    let answer = [];
    
    for (let n of result) {
        answer.push(rankingArr.indexOf(n) + 1);
    }
    return answer;
}