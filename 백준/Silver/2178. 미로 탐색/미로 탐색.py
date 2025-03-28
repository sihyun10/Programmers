from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
maze = []
for _ in range(N):
  maze.append(list(map(int, input().strip())))

# 이동 방향 (상,하,좌,우)
dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs():
  queue = deque([(0,0)])
  maze[0][0] = 2 # 값 2로 셋팅

  while queue:
    x, y = queue.popleft()

    #네 방향 탐색
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      # 미로 범위 벗어나면 무시
      if nx < 0 or ny < 0 or nx >= N or ny >= M:
        continue

      if maze[nx][ny] == 1:
        maze[nx][ny] = maze[x][y] + 1 #현재 값 +1
        queue.append((nx, ny)) #다음 탐색을 위해 큐에 저장

  return maze[N-1][M-1] - 1

print(bfs())