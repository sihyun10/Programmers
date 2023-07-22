function solution(a, b, n) {
  let totalCola = 0;
  let emptyBottles = n;

  while (emptyBottles >= a) {
    const receivedCola = Math.floor(emptyBottles / a) * b;
    totalCola += receivedCola;
    emptyBottles = receivedCola + (emptyBottles % a);
  }

  return totalCola;
}