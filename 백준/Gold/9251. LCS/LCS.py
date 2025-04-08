import sys
input = sys.stdin.readline  

A = input().strip()
B = input().strip()

def lcs(A, B):
  len_A = len(A)
  len_B = len(B)

  dp = [[0] * (len_B + 1) for _ in range(len_A + 1)]

  for i in range(1, len_A + 1):
    for j in range(1, len_B + 1):
      if A[i - 1] == B[j - 1]:
        dp[i][j] = dp[i - 1][j - 1] + 1
      else:
        dp[i][j] = max(dp[i-1][j], dp[i][j-1])
  
  return dp[len_A][len_B]

print(lcs(A,B))