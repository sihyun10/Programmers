function solution(s) {
    const arr = s
        .substring(2, s.length - 2)
        .split('},{')
        .map((e) => e.split(',').map((e) => parseInt(e)))
        .sort((a, b) => a.length - b.length);

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            const element = arr[i][j];
            if (!result.includes(element)) {
                result.push(element);
            }
        }
    }
    return result;
}