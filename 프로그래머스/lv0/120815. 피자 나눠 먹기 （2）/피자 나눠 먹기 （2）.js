// 유클리드 호제법을 사용해, 최소공배수를 구한 다음 6으로 나눈 값이 최소 몇판을 시켜야하는지 구할 수 있다.

function solution(n) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b); // 최대공약수
    const lcm = (a, b) => a * b / gcd(a, b); // 최소공배수
    return lcm(6, n) / 6;
}