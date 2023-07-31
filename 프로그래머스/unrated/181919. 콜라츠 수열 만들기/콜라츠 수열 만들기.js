function solution(n) {
    const result = [n]; // 먼저 n 값을 배열에 추가해놓고 시작
    while (n !== 1) {
        (n % 2 === 0) ? n = n/2 : n = (3 * n) + 1;
        result.push(n);
    }
    return result;
}