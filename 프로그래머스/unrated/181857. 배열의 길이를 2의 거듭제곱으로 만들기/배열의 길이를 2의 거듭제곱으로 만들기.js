function solution(arr) {
    const length = arr.length;
    const targetLength = Math.pow(2, Math.ceil(Math.log2(length))); // 가장 가까운 2의 거듭제곱 길이 

    if (length === targetLength) {
        return arr;
    } else {
        const diff = targetLength - length;
        for (let i = 0; i < diff; i++) {
            arr.push(0);
        }
        return arr;
    }
}
