from collections import deque
import sys
input = sys.stdin.readline

# 상,하,좌,우
dx = [-1,1,0,0]
dy = [0,0,-1,1]

def bfs(graph, visited, a, b):
  n = len(graph)
  queue = deque([(a, b)])
  visited[a][b] = True # visited : 방문 여부 체크
  count = 1

  while queue:
    x, y = queue.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      if nx < 0 or ny < 0 or nx >= n or ny >= n: #영역 벗어날경우
        continue
      if visited[nx][ny] : #이미 방문했다면
        continue
      if graph[nx][ny] == 0: # 집이 없는 곳이라면
        continue

      visited[nx][ny] = True
      queue.append((nx, ny))
      count += 1

  return count


n = int(input())
graph = [list(map(int, input().strip())) for i in range(n)]
visited = [[False] * n for i in range(n)]

cnt = []
for i in range(n):
  for j in range(n):
    if graph[i][j] == 1 and not visited[i][j]:
      cnt.append(bfs(graph, visited, i, j))

print(len(cnt))
cnt = sorted(cnt) #오름차순 정렬
for i in range(len(cnt)):
  print(cnt[i])
