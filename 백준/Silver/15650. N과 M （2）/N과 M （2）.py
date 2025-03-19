import sys

N, M = map(int, sys.stdin.readline().split())
answer = []

def back(start):
  if len(answer) == M:
    print(" ".join(map(str, answer)))
    return

  for i in range(start, N+1):
    answer.append(i)
    back(i + 1)
    answer.pop()

back(1)