// 풀이방법
// 1) n_str 가장 왼쪽에 처음으로 등장하는 0들이 있으면 삭제 2) 뒤에있거나 중간에 있는 0은 삭제하면 안된다. 3) 처음에 0으로 시작하지않는다면 바로 return
// 정규식 사용 (왼쪽 숫자 0 즉 첫자리의 0 제거) : ^ 처음

function solution(n_str) {
    let answer = n_str.replace(/(^0+)/, "");
    return answer;
}