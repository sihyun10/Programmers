import sys
input = sys.stdin.readline  

# 불필요한 변수를 제거 + 함수 빼기 (리팩토링)

# 필요한 동전 개수의 최솟값
# N : 동전 종류, K : 가치의 합
N, K = map(int, input().split())
coins = []
for _ in range(N):
  coins.append(int(input().strip()))
coins.sort(reverse = True)

count = 0
value = K 

for coin in coins:
  if value >= coin:
    count += value // coin
    value %= coin
  if value == 0:
    break

print(count)
