# enumerate : (인덱스, 중요도) 형태로 만들어줌
from collections import deque
import sys
input = sys.stdin.readline

def printer_queue(M, importance):
  queue = deque(enumerate(importance))
  count = 0 # 몇 번쨰로 인쇄되는지 확인

  while queue:
    index, important = queue.popleft() # 맨앞문서 꺼내기

    if queue:
      max_important = -1 # 중요도 초기화
 
      for _, i in queue:
        if i > max_important:
          max_important = i
      if important < max_important:
        queue.append((index, important))
        continue

    count += 1
    if index == M:
      return count


test_case = int(input())
for _ in range(test_case):
  N, M = map(int, input().split())
  importance = list(map(int, input().split()))
  print(printer_queue(M, importance))
