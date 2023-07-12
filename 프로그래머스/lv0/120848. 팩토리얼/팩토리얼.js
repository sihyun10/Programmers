function solution(n) {
  let factorial = 1;
  let i = 1;

  while (factorial <= n) {
    factorial *= i;
    i++;
  }

  return i-2;
}
