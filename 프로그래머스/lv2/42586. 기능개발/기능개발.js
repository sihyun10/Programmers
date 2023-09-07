// 작업 걸리는 기간 = (100-진도)/개발속도 => Math.ceil() : 소수점 올림

function solution(progresses, speeds) {
    const workEnd = progresses.map((progress,index) => Math.ceil((100-progress) / speeds[index]));
    
    let result = [];
    let count = 1;
    let first = workEnd[0];
    
    for(let i = 1; i < workEnd.length; i++) {
        if (first >= workEnd[i]) {
            count += 1;
        } else {
            first = workEnd[i]; // 현재까지의 최대 일 수 업데이트
            result.push(count);
            count = 1;
        }
    }
    result.push(count);
    return result;
}
