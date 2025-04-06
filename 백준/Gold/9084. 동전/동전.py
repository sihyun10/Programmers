import sys
input = sys.stdin.readline

T = int(input())

def all_way_count(coins, amount):
  dp = [0] * (amount + 1)
  dp[0] = 1

  for coin in coins:
    for i in range(coin, amount + 1):
      dp[i] += dp[i - coin]
  
  return dp[amount]

results = []

for i in range(T):
  N = int(input())
  coins = list(map(int, input().split()))
  amount = int(input())
  results.append(all_way_count(coins, amount))

for _ in results:
  print(_)
