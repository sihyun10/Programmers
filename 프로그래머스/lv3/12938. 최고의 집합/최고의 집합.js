function solution(n, s) {
    // s가 n보다 작으면 최고의 집합이 존재 못함
    if (s < n) {
        return [-1];
    }

    const initialValue = Math.floor(s / n); // 초기값
    let result = new Array(n).fill(initialValue);
    const division = s % n;

    for (let i = n - 1; i >= n - division; i--) {
        result[i] += 1;
    }
    return result;
}