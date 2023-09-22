const gcd = (n1, n2) => {
    const r = n1 % n2;
    return n2 === 0 ? n1 : gcd(n2, r);
};

function solution(arrayA, arrayB) {
    let answer = 0;
    let [gcdA, gcdB] = [arrayA[0], arrayB[0]];
    
    for (let i = 1; i < arrayA.length; i++) {
        gcdA = gcd(gcdA, arrayA[i]);
        gcdB = gcd(gcdB, arrayB[i]);
    }
    
    // 모든 원소가 1과 서로소 => 0으로
    if (gcdA === 1) {
        gcdA = 0;
    }
    if (gcdB === 1) {
        gcdB = 0;
    }

    if (arrayA.every((v) => v % gcdB !== 0)) {
        answer = Math.max(answer, gcdB);
    }
    if (arrayB.every((v) => v % gcdA !== 0)) {
        answer = Math.max(answer, gcdA);
    }
    
    return answer;
}