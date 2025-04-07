import sys
input = sys.stdin.readline  

# 필요한 동전 개수의 최솟값

# N : 동전 종류, K : 가치의 합
N, K = map(int, input().split())
coins = []
for _ in range(N):
  coins.append(int(input().strip()))

coins.sort(reverse = True)

count = 0
find_index = 0
value = K 

standard = 0

def find(find_index, value):
  for i in range(find_index, len(coins)):
    if (value >= coins[i]):
      standard = coins[i]
      find_index = i
      break
  return standard, find_index

standard, find_index = find(find_index, value)

quotient = 0

while (True) :
  quotient = value // standard
  count += quotient
  value = value % standard

  if value == 0:
    break
  
  standard, find_index = find(find_index, value)

print(count)
