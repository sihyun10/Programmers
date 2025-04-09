import sys
input = sys.stdin.readline

N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
dp = [[0] * (N) for _ in range(N)]

for term in range(1, N):
  for start in range(N):
    end = start + term
    
    if end == N:
      break
    
    dp[start][end] = int(1e9)

    for t in range(start, end):
      left = dp[start][t]
      right = dp[t + 1][end]
      merge = arr[start][0] * arr[t][1] * arr[end][1]
      dp[start][end] = min(dp[start][end], left + right + merge)

print(dp[0][N - 1])
