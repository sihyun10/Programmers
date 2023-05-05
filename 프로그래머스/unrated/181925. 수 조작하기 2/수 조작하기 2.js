function solution(numLog) {
    let answer = '';
    let n = numLog[0];
    
    for (let i=1; i < numLog.length; i++) {
        if (numLog[i] -n === 1) {
            answer += "w";
        } else if (numLog[i] -n === -1) {
            answer += "s";
        } else if (numLog[i] -n === 10) {
            answer += "d";
        } else if (numLog[i] -n === -10) {
            answer += "a";
        }
        n = numLog[i]
    }
    return answer;
}