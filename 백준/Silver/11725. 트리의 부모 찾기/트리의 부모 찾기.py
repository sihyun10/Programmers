from collections import deque
import sys
input = sys.stdin.readline

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

# BFS (너비우선탐색 활용)
def find_parents(graph, N):
  parents = [0] * (N + 1)
  visited = [False] * (N + 1)
  queue = deque([1])

  while queue:
    node = queue.popleft()
    visited[node] = True

    for i in graph[node]:
      if not visited[i]:
        parents[i] = node
        queue.append(i)
  return parents

N = int(input())
edges = []
for _ in range(N - 1):
  u, v = map(int, input().split())
  edges.append((u, v))

graph = create_graph(edges)
parents = find_parents(graph, N)

for i in range(2, N + 1):
  print(parents[i])