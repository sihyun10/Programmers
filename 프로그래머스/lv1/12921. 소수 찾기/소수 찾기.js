function solution(n) {
    const s = new Set();
    for (let i = 2; i <= n; i++) {
        s.add(i);
    }

    for (let j = 2; j <= Math.sqrt(n) + 1; j++) {
        if (s.has(j)) {
            for (let k = j * j; k <= n; k += j) {
                s.delete(k);
            }
        }
    }
    return s.size;
}