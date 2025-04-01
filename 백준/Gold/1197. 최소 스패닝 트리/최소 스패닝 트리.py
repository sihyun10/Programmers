import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

def find_parent(parent, x):
  if parent[x] != x:
    parent[x] = find_parent(parent, parent[x])
  return parent[x]

def union_parent(parent, a, b):
  a = find_parent(parent, a)
  b = find_parent(parent, b)
  if a < b:
    parent[b] = a
  else:
    parent[a] = b

# V : 노드 개수, E : 간선의 개수
V, E = map(int, input().split())
parent = [0] * (V + 1)
for i in range(1, V + 1):
  parent[i] = i

edges = []
total_cost = 0

for _ in range(E):
  a, b, cost = map(int, input().split())
  edges.append((cost, a, b))

edges.sort(key = lambda x : x[0])

for i in range(E):
  cost, a, b = edges[i]
  if find_parent(parent, a) != find_parent(parent, b):
    union_parent(parent, a, b)
    total_cost += cost

print(total_cost)