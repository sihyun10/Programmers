// Math.sqrt() : 제곱근을 한 값을 구해준다. ex) Math.sqrt(16); // 4
// Math.floor : 소수 자리의 값이 있다면 소수점 내림. ex) let num2 = 5.7; Math.floor(num2); //5

// cf) Math.sqrt(2); // 1.414213562373095 => 이렇게 소수점이 나올 수 있다. 따라서, 제곱근을 한 값이 정수값인지 확인하기 위해, if문을 사용.

function solution(n) {
    let i = Math.sqrt(n);
    
    return i === Math.floor(i) ? 1 : 2;
}
