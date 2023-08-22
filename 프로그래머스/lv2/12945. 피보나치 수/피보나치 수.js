// F(0) = 0, F(1) = 1 이 두값은 고정
// 제한사항으로 n값이 2이상 100,000이하인 자연수라고 했기에 n이 0일때와 1일때 조건 없이 2일때부터 조건 달기.

// ex) n=2일때, F(2) = F(0) + F(1) = 0 + 1이어야한다.

function solution(n) {
    let fibonacci = [0,1];
    
    for(let i = 2; i <= n; i++) {
        fibonacci[i] = (fibonacci[i-2] + fibonacci[i-1]) % 1234567;
    }
    return fibonacci[n];
}