function solution(storey) {
    let answer = 0;
    const split = String(storey).split('').map(x => Number(x));
    for (let i = split.length - 1; i >= 0; i--) {
        if (split[i] > 5) {
            answer += 10 - split[i];
            if (i === 0) {
                answer += 1;
            }
            split[i - 1] += 1;
        } else if (split[i] === 5 && i > 0 && split[i - 1] >= 5) {
            answer += 5;
            split[i - 1] += 1;
        } else {
            answer += split[i];
        }
    }
    return answer;
}