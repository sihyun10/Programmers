// arr[i] % divisor === 0 인 값이 생길때마다 result 배열에 값을 넣어준다. 최종적으로 result 길이가 0보다 작으면 [-1]을 리턴하고, 0보다 크면 오름차순을 통해 정렬후 return 시킨다.

function solution(arr, divisor) {
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            result.push(arr[i]);
        }
    }
    
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}
