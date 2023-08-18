// 배열 A, B 누적곱이 최소값이 되려면 작은값 * 큰값을 곱해줘야한다.
// 따라서 A배열은 오름차순으로 해서 작은값을 맨앞에. B배열은 내림차순으로해서 큰값을 맨앞에 둠.

function solution(A, B) {
    A.sort((a, b) => a - b);  // 오름차순
    B.sort((a, b) => b - a);  // 내림차순
    
    let answer = 0;
    
    for (let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}