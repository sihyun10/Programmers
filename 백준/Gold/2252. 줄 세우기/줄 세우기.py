from collections import deque
import sys
input = sys.stdin.readline

N, M = map(int, input().split())
indegree = [0] * (N + 1)
graph = [[] for i in range(N + 1)]

for _ in range(M):
  A, B = map(int, input().split())
  graph[A].append(B)
  indegree[B] += 1

def topology_sort():
  results = []
  q = deque()
  for i in range(1, N + 1):
    if indegree[i] == 0:
      q.append(i)
  
  while q:
    now = q.popleft()
    results.append(now)

    for i in graph[now]:
      indegree[i] -= 1
      if indegree[i] == 0:
        q.append(i)
  
  for i in results:
    print(i, end = " ")

topology_sort()
print()