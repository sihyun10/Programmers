// 풀이방법
// a,b,c 가 모두 다르면 a+b+c 점을 얻는다. 
// 두 숫자만 같을때, (a+b+c) * (Math.pow(a,2) + Math.pow(b,2) + Math.pow(c,2)) 점을 얻는다.
// 모두 같으면 (a+b+c) * (a^2 + b^2 + c^2) * (a^3 + b^3 + c^3)
// 제곱값 구하는 방법 => Math.pow() 함수 사용. ex) Math.pow(7, 2); => 49
// 두 숫자가 같은 경우를 체크하는 것보다 세 숫자가 모두 같은경우를 먼저 체크해야한다. (두숫자가 같은경우 체크 -> 세 숫자가 같은경우 : 두숫자가같은경우에 우선 실행되어 원하는 값이 출력되지 않는다)

function solution(a, b, c) {
    if (a === b && b === c) {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) * (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
    } else if (a === b || a === c || b === c) {
        return (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
    } else {
        return a + b + c;
    }
}
