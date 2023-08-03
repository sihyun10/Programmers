function solution(num_list) {
    let count = 0;

    for (let i = 0; i < num_list.length; i++) {
        while (num_list[i] !== 1) {
            if (num_list[i] % 2 === 0) {
                num_list[i] /= 2;
                count++
            } else {
                num_list[i] -= 1;
            }
        }
    }
    return count;
}

// 계속 테스트를 통과하지못했는데, 내가 제대로 못 확인한부분은 "나누기연산의횟수"였다. 뺄샘한부분까지 count를 세었기 때문이다.