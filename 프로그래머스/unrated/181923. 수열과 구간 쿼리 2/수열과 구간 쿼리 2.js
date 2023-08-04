function solution(arr, queries) {
    let result = [];
    for (let [s, e, k] of queries) {
        let minValue = Infinity; // k보다 크고 가장 작은 값
        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minValue) {
                minValue = arr[i];
            }
        }
        if (minValue === Infinity) {
            result.push(-1);
        } else {
            result.push(minValue);
        }
    }
    return result;
}