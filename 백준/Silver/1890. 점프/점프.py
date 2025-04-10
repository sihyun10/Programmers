# 이 문제는 DP 알고리즘으로 풀었습니다.

# board 위에선 아래, 오른쪽으로만 jump 이동 가능함
# dp[nx][ny] += dp[x][y] : 경로 수 누적해 모든 경로의 개수 계산

import sys
input = sys.stdin.readline

def jump_game(N, board):
  dp = [[0] * N for _ in range(N)]
  dp[0][0] = 1

  # 방향 : 아래 또는 오른쪽으로만 이동함
  dx = [1, 0] #아래
  dy = [0, 1] #오른쪽

  for x in range(N):
    for y in range(N):
      if x == N -1 and y == N - 1:
        continue

      jump = board[x][y]
      if jump == 0:
        continue

      for dir in range(2):
        nx = x + dx[dir] * jump
        ny = y + dy[dir] * jump

        if 0 <= nx < N and 0 <= ny < N:
          dp[nx][ny] += dp[x][y]
          
  return dp[N -1][N - 1]


N = int(input()) # 게임 판의 크기
board = [list(map(int, input().split())) for _ in range(N)]
print(jump_game(N, board))
