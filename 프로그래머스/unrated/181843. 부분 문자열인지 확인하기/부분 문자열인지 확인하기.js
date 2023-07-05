// 삼항연산자를 사용하여, my_string에 target 즉. 부분문자열이 존재하는지 확인 후, 있다면 1을 반환하고 없다면 0을 반환하도록 하였다.

function solution(my_string, target) {
    return (my_string.indexOf(target) != -1) ? 1 : 0;
}