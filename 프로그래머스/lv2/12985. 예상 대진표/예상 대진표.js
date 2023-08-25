// 다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번을 차례대로 배정받습니다.
// (조건) a,b 선수는 항상 이긴다.
// a,b선수가 맞붙게 되는 라운드를 구해야하기에 같아지는 순간까지 구하면됨
// Math.ceil() : 소수점 올림

function solution(n,a,b) {
    let answer = 1;
    
    while(Math.ceil(a/2) !== Math.ceil(b/2)) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }
    return answer;
}