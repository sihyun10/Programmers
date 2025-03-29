from collections import deque
import sys
input = sys.stdin.readline

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
  return graph

# BFS (최단 거리 문제)
# -1은 방문하지 않았다는걸 의미
def bfs_queue(graph, start):
  distance = [-1] * (N + 1)
  distance[start] = 0 #출발도시 0
  queue = deque([start])

  while queue:
    v = queue.popleft()
    for u in graph.get(v, []):
      if distance[u] == -1:
        distance[u] = distance[v] + 1
        queue.append(u)
        
  return distance


# 도시의 개수 : N, 도로의 개수 : M, 거리 정보 : K, 출발 도시의 번호 X
N, M, K, X = map(int, input().split())
edges = []
for _ in range(M):
  vertex1, vertex2 = map(int, input().split())
  edges.append((vertex1, vertex2))

graph = create_graph(edges, directed=True)
distance = bfs_queue(graph, X)

result = []
for i in range(1, N+1):
  if distance[i] == K:
    result.append(i)

if result:
  print("\n".join(map(str, sorted(result))))
else:
  print(-1)