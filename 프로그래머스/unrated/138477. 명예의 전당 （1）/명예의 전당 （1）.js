function solution(k, score) {
    let target = []; // 비교할 대상을 넣는 배열
    let result = []; // 결과발표 점수 담는 배열
    
    for(let i = 0; i < score.length; i++) {
        target.push(score[i]);
        
        if(target.length <= k) {
            result.push(Math.min(...target));
        } else if(target.length > k) {
            if(Math.min(...target) < score[i]) {
                target.sort((a,b) => a-b);
                target.shift(); // 가장작은값 삭제
            } else {
                target.pop(); // target에 넣은 score[i]값 삭제
            }
            result.push(Math.min(...target));
        }
    }
    return result;
}