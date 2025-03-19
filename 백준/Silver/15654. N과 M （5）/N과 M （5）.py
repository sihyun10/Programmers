import sys

N, M = map(int, sys.stdin.readline().split())
data = list(map(int, sys.stdin.readline().split()))
data.sort()

answer = []

def back():
  if len(answer) == M:
    print(" ".join(map(str, answer)))
    return

  for i in range(N):
    if data[i] not in answer:
      answer.append(data[i])
      back()
      answer.pop()

back()