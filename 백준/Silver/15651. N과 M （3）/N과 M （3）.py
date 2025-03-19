import sys

N, M = map(int, sys.stdin.readline().split())
answer = []

def back():
  if len(answer) == M:
    print(" ".join(map(str, answer)))
    return

  for i in range(1, N+1):      
    answer.append(i)
    back()
    answer.pop()

back()