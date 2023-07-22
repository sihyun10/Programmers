// add : Set 객체에 추가할 요소의 값을 넣기위해 사용함.

function solution(n) {
    // 런타임 에러가 나왔는데, n이 0인 경우를 설정 안해두어서 추가적으로 작성
    if (n === 0) {
        return 0;
    }
    
    let sum = new Set();

    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum.add(i);
            if (i !== n / i) {
                sum.add(n / i);
            }
        }
    }

    return [...sum].reduce((prev, curr) => prev + curr);
}