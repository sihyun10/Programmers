from collections import deque
import sys
input = sys.stdin.readline

# N : 정점의 개수, M : 간선의 개수  
# 간선의 양 끝점 : u, v

# output : 연결 요소의 개수를 출력해라

def create_graph(edges):
  graph = {}
  for u, v in edges:
    if u not in graph:
      graph[u] = []
    if v not in graph:
      graph[v] = []

    graph[u].append(v)
    graph[v].append(u)

  for key in graph:
    graph[key].sort()
  
  return graph

def dfs(graph, start, visited):
  stack = deque([start])
  result = []
  while stack:
    v = stack.pop()
    if not visited[v]:
      visited[v] = True
      result.append(int(v))
      for u in reversed(graph.get(v, [])):
        stack.append(u)
  return result

N, M = map(int, input().split())
edges = []
for _ in range(M):
  u, v = map(int, input().split())
  edges.append((u, v))

graph = create_graph(edges)
visited = [False] * (N+1)
connected_count = 0

for i in range(1, N+1):
  if not visited[i]:
    dfs(graph, i, visited)
    connected_count += 1

print(connected_count)