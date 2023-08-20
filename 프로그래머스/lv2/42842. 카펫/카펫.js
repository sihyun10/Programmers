function solution(brown, yellow) {
    var answer = [];
    
    for (let y = 1; y <= yellow; y++) {
        if (yellow % y === 0) {
            let x = yellow / y; // 노란색 격자의 가로길이
            if ((x + 2) * (y + 2) === brown + yellow) {
                answer = [x + 2, y + 2];
                break;
            }
        }
    }
    return answer;
}
