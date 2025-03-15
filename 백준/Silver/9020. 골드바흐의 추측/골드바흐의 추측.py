import sys
import math

# 모든 짝수는 두 소수의 합으로 나타낼 수 있다.
# 같은 말로 두 소수 a,b 를 더하면 짝수여야함 (a + b = n, b = n - a)

#소수 판별 함수
def is_prime_num(num):
  if num < 2: #1과 0은 소수 아님
    return False
  for i in range(2, int(math.sqrt(num)) + 1):
    if num % i == 0:
      return False
  return True

T = int(sys.stdin.readline())

result = []
for i in range(T):
  n = int(sys.stdin.readline())
  
  for a in range(n // 2, 1, -1): # n의 절반값부터 2까지 감소하며 탐색
    b = n - a
    if is_prime_num(a) and is_prime_num(b):
      result.append(list([a, b]))
      break

for i in result:
  print(i[0], i[1])
