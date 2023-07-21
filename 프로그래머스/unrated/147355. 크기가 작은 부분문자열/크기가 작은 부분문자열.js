function solution(t, p) {
    let count = 0;

    for (let i = 0; i <= t.length - p.length; i++) {
        const subString = t.slice(i, i + p.length);
        if (Number(subString) <= Number(p)) {
            count++;
        }
    }

    return count;
}
