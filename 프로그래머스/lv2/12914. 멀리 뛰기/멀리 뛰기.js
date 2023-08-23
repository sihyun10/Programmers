// 1234567를 나눈 나머지를 리턴하는 함수라고 해서 바로 어제 풀었던 '피보나치수' 에서 봤던거와 비슷해서 피보나치수 푸는 방식과 대입해보니 풀어져서 아래와같이 풀이해보았다.

function solution(n) {
    let fibonacci = [1,2];
    for(let i = 2; i <= n; i++) {
        fibonacci[i] = (fibonacci[i-2] + fibonacci[i-1]) % 1234567;
    }
    return fibonacci[n-1];
}