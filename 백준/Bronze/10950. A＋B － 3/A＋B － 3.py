import sys

test_case = int(sys.stdin.readline())
result = []

sum = 0
for i in range(test_case):
  A, B = map(int, sys.stdin.readline().split())
  sum = A + B
  result.append(sum)

for i in result:
  print(i)
