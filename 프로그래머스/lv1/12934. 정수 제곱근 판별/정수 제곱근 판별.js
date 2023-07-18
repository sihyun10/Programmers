function solution(n) {
    const x = Math.sqrt(n);
    return Number.isInteger(x) && x > 0 ? (x + 1) ** 2 : -1;
}