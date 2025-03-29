from collections import deque
import sys
input = sys.stdin.readline

# 그래프 생성해주는 함수
def create_graph(edges, directed = False):
  graph = {}
  for u, v in edges:
    if u not in graph:
      graph[u] = []
    if v not in graph:
      graph[v] = []
    
    graph[u].append(v)
    if not directed:
      graph[v].append(u)

  # 정점 번호가 작은 것부터 방문할 수 있도록 정렬
  for key in graph:
    graph[key].sort()

  return graph

# DFS (깊이 우선 탐색 - 재귀 말고 스택으로)
def dfs_stack(graph, start):
  visited = [False] * (N+1)
  stack = deque([start])

  result = []
  while stack:
    v = stack.pop()
    if not visited[v]:
      visited[v] = True
      result.append(str(v))

      for u in reversed(graph.get(v, [])):
        stack.append(u)

  return result

# BFS (너비 우선 탐색)
def bfs_queue(graph, start):
  visited = [False] * (N+1)
  que = deque([start])
  visited[start] = True

  result = []
  while que:
    v = que.popleft()
    result.append(str(v))

    for u in graph.get(v, []):
      if not visited[u]:
        visited[u] = True
        que.append(u)

  return result

# 첫째 줄에는 DFS, 다음 줄에는 BFS를 수행한 결과  
N, M, V = map(int, input().split())
edges = []
for _ in range(M):
  vertex1, vertex2 = map(int, input().split())
  edges.append((vertex1, vertex2))

graph = create_graph(edges)

print(" ".join(dfs_stack(graph, V)))
print(" ".join(bfs_queue(graph, V)))