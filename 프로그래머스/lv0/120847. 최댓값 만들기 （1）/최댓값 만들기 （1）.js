function solution(numbers) {
  numbers.sort((a, b) => b - a); // 내림차순 정렬
  let maxValue = numbers[0] * numbers[1]; // 첫번째와 두번째 곱한값을 최대값으로 두고

  // 다른값들과도 비교해 최종 최대값 결정
  for (let i = 2; i < numbers.length; i++) {
    maxValue = Math.max(maxValue, numbers[0] * numbers[i]);
  }
  return maxValue;
}
