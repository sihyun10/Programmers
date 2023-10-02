function solution (A, B) {
  let maxPoints = 0; // B 팀이 얻을 수 있는 최대 승점

  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  let bIndex = 0; // B 팀원 인덱스

  for (let i = 0; i < A.length; i++) {
    if (A[i] < B[bIndex]) {
      maxPoints += 1;
      bIndex += 1;
    }
  }

  return maxPoints;
}