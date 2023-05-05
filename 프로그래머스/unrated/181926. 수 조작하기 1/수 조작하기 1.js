function solution(n, control) {
  const actions = {
    'w': 1,
    's': -1,
    'd': 10,
    'a': -10
  };

  for (let i = 0; i < control.length; i++) {
    n += actions[control[i]] || 0;
  }
  return n;
}