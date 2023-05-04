function solution(n) {
  let answer = 0;
  
  if (n % 2 === 1) { // n이 홀수인 경우
    for (let i = 1; i <= n; i += 2) { // 1부터 n까지의 홀수를 더함
      answer += i;
    }
  } else { // n이 짝수인 경우
    for (let i = 2; i <= n; i += 2) { // 2부터 n까지의 짝수를 제곱한 값을 더함
      answer += i ** 2;
    }
  }
  
  return answer;
}