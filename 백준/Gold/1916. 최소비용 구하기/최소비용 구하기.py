# 도시의 개수 : 노드의 개수
# 버스의 개수 : 간선의 개수  
# 버스의 정보 => 출발 도시의 번호(a), 도착지의 도시 번호(b), 버스 비용(가중치)(c)

import heapq
import sys
input = sys.stdin.readline
INF = int(1e9) #10억 (무한을 뜻함)

N = int(input())
M = int(input())
graph = [[] for i in range(N + 1)]
#최단거리 테이블 초기화 (무한으로)
distance = [INF] * (N + 1)

for _ in range(M):
  a, b, c = map(int, input().split())
  graph[a].append((b, c))

start_city, end_city = map(int, input().split())

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start))
  distance[start] = 0
  while q:
    dist, now = heapq.heappop(q)
    if distance[now] < dist:
      continue
    for next_node, weight in graph[now]:
      cost = dist + weight
      if cost < distance[next_node]:
        distance[next_node] = cost
        heapq.heappush(q, (cost, next_node))

dijkstra(start_city)
print(distance[end_city])