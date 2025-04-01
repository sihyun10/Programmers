from collections import deque
import sys
input = sys.stdin.readline

# 컴퓨터의 수 : com_count
# 컴퓨터 쌍의 수 : com_pair_count
# 네트워크 상 연결되어있는 컴퓨터들 => 무방향

# 출력: 1번 컴퓨터가 웜 바이러스에 걸렸을때, 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수

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

com_count = int(input())
com_pair_count = int(input())
edges = []
for _ in range(com_pair_count):
  u, v = map(int, input().split())
  edges.append((u, v))

visited = [False] * (com_count + 1)
graph = create_graph(edges)
start = 1
results = dfs(graph, start, visited)

print(len(results) - 1) #본인 자신은 횟수에서 -1 해야함