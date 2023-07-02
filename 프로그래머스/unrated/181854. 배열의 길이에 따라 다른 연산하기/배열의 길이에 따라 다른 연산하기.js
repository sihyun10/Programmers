function solution(arr, n) {
  let result = arr.map((num, index) => {
    if (arr.length % 2 === 0) {
      if (index % 2 === 1) {
        return num + n;
      }
    } else {
      if (index % 2 === 0) {
        return num + n;
      }
    }
    return num;
  });
  return result;
}