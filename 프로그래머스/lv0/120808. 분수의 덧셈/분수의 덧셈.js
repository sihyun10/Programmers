function solution(numer1, denom1, numer2, denom2) {
    // 두 분모의 최소공배수를 공통분모로 두어 값 계산.
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b); // 최대공약수
    const getLCM = (a, b) => (a * b) / getGCD(a, b); // 최소공배수
    const lcm = getLCM(denom1, denom2);

    let numerator = (numer1 * lcm) / denom1 + (numer2 * lcm) / denom2;
    let denominator = lcm;

    // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return [numerator, denominator];
}