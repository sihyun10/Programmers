from collections import deque
import sys
input = sys.stdin.readline

def create_graph(V, edges):
  graph = {i: [] for i in range(1, V+1)}
  for u, v in edges:
    graph[u].append(v)
    graph[v].append(u)
  return graph

# V : 그래프의 정점 개수, E : 간선의 개수
def is_bipartite(V, graph):
  color = [0] * (V + 1) # 0 : 미방문, 1 : 빨강, -1 : 파랑

  def dfs(start):
    stack = deque([start])
    color[start] = 1 #빨강 (시작 정점) 

    while stack:
      v = stack.pop()
      for u in graph[v]:
        if color[u] == 0:
          color[u] = -color[v]
          stack.append(u)
        elif color[u] == color[v]: #이분 그래프 X
          return False
    return True
  
  for i in range(1, V + 1):
    if color[i] == 0:
      if not dfs(i):
        return "NO"
  return "YES"

test_cases = int(input())
results = []

for _ in range(test_cases):
  V, E = map(int, input().split())
  edges = [tuple(map(int, input().split())) for _ in range(E)]
  graph = create_graph(V, edges)
  results.append(is_bipartite(V, graph))

print("\n".join(results))