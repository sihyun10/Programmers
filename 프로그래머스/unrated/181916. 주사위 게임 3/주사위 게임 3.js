function solution(a, b, c, d) {
    const array = [a, b, c, d];
    const remove = Array.from(new Set(array));
    const duplication = [...new Set(array.filter((item, index) => array.indexOf(item) !== index))];

    if (remove.length === 1) {
        return 1111 * a;
    } else if (remove.length === 4) {
        return Math.min(a,b,c,d);
    } else if (remove.length === 2) {
        if(duplication.length === 2) {
            const p = duplication[0];
            const q = duplication[1];
            return ((p+q) * Math.abs(p-q));
        } else if (duplication.length === 1) {
            const p = duplication[0];
            const q = remove.filter((element) => element !== duplication[0]);
            return ((10 * p + q[0]) ** 2);
        }
    } else if (remove.length === 3) {
        const arr = array.filter((element) => element !== duplication[0]);
        return arr[0] * arr[1];
    }
}