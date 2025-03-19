import sys

N, M = map(int, sys.stdin.readline().split())
data = list(map(int, sys.stdin.readline().split()))
data.sort()

answer = []

def back(start):
  if len(answer) == M:
    print(" ".join(map(str, answer)))
    return

  for i in range(start, N):
    answer.append(data[i])
    back(i)
    answer.pop()

back(0)
