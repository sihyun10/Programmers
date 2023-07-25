// 두 자연수의 곱 = 최대공약수 X 최소공배수
// 따라서 위와 같은 특성을 이용해 최소공배수를 구한 다음 최대공약수를 구한다.

function solution(n, m) {
    const nCommonDivisor = [];
    const mCommonDivisor = [];
    
    for (let i = 1; i <= n; i ++) {
        if (n % i === 0) {
            nCommonDivisor.push(i);
        }
    }
    
    for (let j = 1; j <= m; j++) {
        if (m % j === 0) {
            mCommonDivisor.push(j);
        }
    }
    
    // 최대공약수
    const greatestCommonFactor = Math.max(...nCommonDivisor.filter(a => mCommonDivisor.includes(a)));
    
    return [greatestCommonFactor, (n*m) / greatestCommonFactor];
}