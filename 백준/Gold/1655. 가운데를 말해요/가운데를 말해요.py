import heapq
import sys
input = sys.stdin.readline

N = int(input())
speak_values = []
for _ in range(N):
  speak_values.append(int(input().strip()))

max_heap = [] #중간값 이하를 저장하는 최대힙 (왼쪽)
min_heap = [] #중간값 초과를 저장하는 최소힙 (오른쪽)
results = []

for value in speak_values:
  if not max_heap or value <= -max_heap[0]:
    heapq.heappush(max_heap, -value)
  else:
    heapq.heappush(min_heap, value)

  # 중간값 유지
  if len(min_heap) > len(max_heap):
    heapq.heappush(max_heap, -heapq.heappop(min_heap))
  elif len(max_heap) > len(min_heap) + 1:
    heapq.heappush(min_heap, -heapq.heappop(max_heap))

  results.append(-max_heap[0])

for result in results:
  print(result)