import sys
import math

#소수 판별 함수
def is_prime_num(num):
  if num < 2: #1과 0은 소수 아님
    return False
  for i in range(2, int(math.sqrt(num)) + 1):
    if num % i == 0:
      return False
  return True

N = int(sys.stdin.readline())

input_value = list(map(int, sys.stdin.readline().split()))

count = 0
for num in input_value:
  if (is_prime_num(num)) :
    count += 1

print(count)