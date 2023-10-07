function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 };
    const options = { '*': 2, '#': -1 };
    
    let scores = [];
    let currentScore = 0;

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult[i])) { // 숫자인 경우
            if (dartResult[i - 1] === '1') {
                currentScore = 10;
            } else {
                currentScore = parseInt(dartResult[i], 10);
            }
        } else if (dartResult[i] in bonus) { // 보너스인 경우
            scores.push(Math.pow(currentScore, bonus[dartResult[i]]));
        } else if (dartResult[i] in options) { // 옵션인 경우
            if (dartResult[i] === '*') {
                scores[scores.length - 1] *= options['*'];
                // 직전 숫자가 없는 경우에는 현재 숫자에만 2배를 해줘야하므로 조건 걸어줌
                if (scores.length > 1) {
                    scores[scores.length - 2] *= options['*'];
                }
            } else {
                scores[scores.length - 1] *= options['#'];
            }
        }
    }
    return scores.reduce((acc, cur) => acc + cur);
}
