from collections import deque
import sys
input = sys.stdin.readline

n = int(input().strip())
maze = []
for _ in range(n):
  maze.append(list(map(int, input().strip())))

# 이동 방향 (상,하,좌,우)
dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs():
  queue = deque([(0,0)])
  changes = [[-1] * n for _ in range(n)] # 변경된 검은색 방 개수 저장
  changes[0][0] = 0

  while queue:
    x, y = queue.popleft()

    if x == n - 1 and y == n - 1:
      return changes[x][y]

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx < 0 or ny < 0 or nx >= n or ny >= n:
        continue

      if changes[nx][ny] == -1:
        if maze[nx][ny] == 1: #흰방부터 먼저 탐색
          queue.appendleft((nx, ny))  
          changes[nx][ny] = changes[x][y]
        else:
          queue.append((nx, ny))
          changes[nx][ny] = changes[x][y] + 1

print(bfs())