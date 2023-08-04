// 조합(nCr)을 구하는것과 같다. (분자 : n! , 분모 : r! * (n-r)!)

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
    if(balls === share) {
        return 1;
    }
    const numerator = factorial(balls); // 분자
    const denominator = factorial(share) * factorial(balls-share); // 분모
    return Math.round(numerator / denominator);
}