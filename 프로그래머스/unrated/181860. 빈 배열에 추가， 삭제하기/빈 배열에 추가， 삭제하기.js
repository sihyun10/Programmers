function solution(arr, flag) {
  let X = [];
    
  for (let i = 0; i < flag.length; i++) {
    if (flag[i] === true) {
      for (let j = 0; j < arr[i] * 2; j++) {
        X.push(arr[i]);
      }
    } else {
      X.splice(-arr[i]);
    }
  }
  return X;
}
