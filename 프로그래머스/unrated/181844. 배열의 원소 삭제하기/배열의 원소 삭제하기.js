// 풀이방법) delete_list에 arr[i] 가 포함되어있는지 확인하고 splice 해준다.

function solution(arr, delete_list) {
    for (let i = 0; i < arr.length; i++) {
        if (delete_list.includes(arr[i])) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}