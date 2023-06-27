// n번째 이후의 원소를 추출하고, 원래있는 리스트 앞에 이어붙인다.

function solution(num_list, n) {
    let backslice = num_list.slice(n);
    let headslice = num_list.slice(0,n);
    return backslice.concat(headslice);
}