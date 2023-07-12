// Math.trunc : 소수부분 제거하고 정수부분만 반환

function solution(n, k) {
    if (n >= 10) {
        let service = Math.trunc(n / 10);
        return (n * 12000 + k * 2000) - (service * 2000);
    } else {
        return (n * 12000 + k * 2000);
    }
}