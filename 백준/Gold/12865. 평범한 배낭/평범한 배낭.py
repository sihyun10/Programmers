import sys
input = sys.stdin.readline

# N : 물품의 수, K : 준서가 버틸 수 있는 무게
N, K = map(int, input().split())

weight = [0] * (N + 1)
value = [0] * (N + 1)

for i in range(1, N + 1):
  weight[i], value[i] = map(int, input().split())

dp = [[0] * (K + 1) for _ in range(N + 1)]

for i in range(1, N + 1):
  for w in range(1, K + 1):
    if weight[i] > w:
      dp[i][w] = dp[i - 1][w]
    else:
      dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weight[i]] + value[i])

print(dp[N][K])