// 배열에서 원하는 값을 찾고 싶을때, indexOf, includes를 사용할 수 있다.
// includes 는 배열속 해당 원소가있으면 true, 없으면 false를 반환한다. 따라서 true라면 1을 출력하고 false라면 0을 출력하게끔 해줘야한다.

function solution(num_list, n) {
    if (num_list.includes(n) === true) {
        return 1;
    } else {
        return 0;
    }
}