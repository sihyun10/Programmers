function solution(arr) {
    if (arr.length === 1) {
        return [-1];
    }
    const minNum = Math.min(...arr); // 가장 작은 수를 찾음
    const findIndex = arr.indexOf(minNum); // 가장 작은 수의 인덱스를 찾음
    arr.splice(findIndex, 1); // 해당 인덱스의 요소를 삭제
    return arr;
}
