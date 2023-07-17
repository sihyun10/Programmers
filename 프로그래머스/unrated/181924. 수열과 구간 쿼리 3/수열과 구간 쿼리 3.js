function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const first = queries[i][0];
        const second = queries[i][1];
        
        // first와 second의 값을 바꾸기 위해 임시 변수 temp를 사용
        const temp = arr[first];
        arr[first] = arr[second];
        arr[second] = temp;
    } 
    return arr;
}