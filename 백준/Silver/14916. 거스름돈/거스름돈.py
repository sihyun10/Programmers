# 가장 큰 거스름돈 5원부터 최대한 많이 쓰도록 한다
# 딱 5원으로만 나눠떨어지지않다면 2원도 있다는 거다!
# 그럼 n % 5 == 0이 될때까지 n -= 2를 해준다 (2원 사용) 

import sys
input = sys.stdin.readline

# n : 거스름돈 액수
n = int(input())

def min_coin_count(n):
  count = 0
  while n >= 0:
    if n % 5 == 0:
      count += n // 5
      return count
    n -= 2
    count += 1
  return -1

print(min_coin_count(n))