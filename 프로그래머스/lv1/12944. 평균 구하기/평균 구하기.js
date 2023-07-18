function solution(arr) {
  const length = arr.length;
  const sum = arr.reduce((prev, cur) => prev + cur, 0);
  return sum / length;
}
