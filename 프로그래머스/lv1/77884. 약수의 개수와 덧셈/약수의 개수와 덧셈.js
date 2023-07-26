function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        const sqrt = Math.floor(Math.sqrt(i));
        let divisorCount = 0;

        for (let j = 1; j <= sqrt; j++) {
            if (i % j === 0) {
                divisorCount += 2; // j가 i의 약수 => j와 i/j 두 개의 약수
            }
        }

        if (sqrt * sqrt === i) {
            divisorCount -= 1; // 중복된 약수 제거
        }

        if (divisorCount % 2 === 0) {
            result += i;
        } else {
            result -= i;
        }
    }

    return result;
}