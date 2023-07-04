// 배열 합치기 => concat()

function solution(arr, intervals) {
    const first = arr.slice(intervals[0][0], intervals[0][1] + 1);
    const second = arr.slice(intervals[1][0], intervals[1][1] + 1);
    return first.concat(second);
}