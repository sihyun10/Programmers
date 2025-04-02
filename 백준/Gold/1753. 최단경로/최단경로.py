import heapq
import sys
input = sys.stdin.readline
INF = int(1e9)

# (방향 그래프) 주어진 시작점에서 다른 모든 정점으로의 최단 경로를 구해라
# 정점(노드)의 개수 : V, 간선의 개수 : E
# 시작 정점의 번호 : K (주어짐)
# 간선을 나타내는 세 개의 정수 : u, v, w(가중치) 가 순서대로 주어짐

V, E = map(int, input().split())
start = int(input())
graph = [[] for i in range(V + 1)]
distance = [INF] * (V + 1)

for _ in range(E):
  u, v, w = map(int, input().split())
  graph[u].append((v, w))

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0
  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
    for i in graph[now]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heapq.heappush(q, (cost, i[0]))

dijkstra(start)

for i in range(1, V + 1):
  if distance[i] == INF:
    print("INF")
  else:
    print(distance[i])