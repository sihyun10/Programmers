// 3의 배수와 3을 쓰지않는다. => x % 3 === 0 && includes('3')
function solution(n) {
    for(let i = 1 ; i <= n ; i++) {
        if(i.toString().includes('3') || i % 3 === 0) {
            n += 1;
        }
    }
    return n;
}