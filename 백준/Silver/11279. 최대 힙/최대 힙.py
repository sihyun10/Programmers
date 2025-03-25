import heapq
import sys
input = sys.stdin.readline

N = int(input())
heap_q = []
result = []

for i in range(N):
  input_value = int(input().strip("\n"))
  if input_value > 0:
    heapq.heappush(heap_q, -input_value)
  elif input_value == 0:
    if heap_q:
      result.append(-1 * heapq.heappop(heap_q))
    else:
      result.append(0)

for _ in result:
  print(_)