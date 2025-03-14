import sys

N = int(sys.stdin.readline())

for i in range(1, 10):
  result = N * i
  print(f'{N} * {i} = {result}')
