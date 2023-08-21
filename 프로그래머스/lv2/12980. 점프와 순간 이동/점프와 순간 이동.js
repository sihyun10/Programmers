// 순간이동(x2) 은 건전지 사용량 X.
// n을 2만큼 나눴을때 0으로 떨어지면 계속해서 2를 나누면서 건전지 사용량이 없게끔 하고,
// 0으로 떨어지지 않는다면 -1을 해주고 다시 2를 나누면 된다. (이때 result 값은 1씩 증가해준다.)

function solution(n) {
    let result = 0; // 건전지 사용량
    
    while(n > 0) {
        if(n % 2 === 0) {
            n /= 2;
        } else {
            n -= 1;
            result += 1;
        }
    }
    return result;
}