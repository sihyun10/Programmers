function solution(a, b) {
    // 최대공약수
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const greatestCommonDenominator = gcd(a, b);

    // 최대공약수를 활용해서 분수 약분
    const numerator = a / greatestCommonDenominator;
    const denominator = b / greatestCommonDenominator;

    let check = denominator;
    while (check % 2 === 0) check /= 2;
    while (check % 5 === 0) check /= 5;

    return check === 1 ? 1 : 2;
}
