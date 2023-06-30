// Math.pow()함수는 base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다.
// 1시간씩 지날수록 2배씩 증식한다고 했기때문에 2^t 값에다가 처음 n 값을 곱해주면 값이 나옵니다. 따라서 n * Math.pow(2,t); 로 구하였습니다.

function solution(n, t) {
    return n * Math.pow(2,t);
}