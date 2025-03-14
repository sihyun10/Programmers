import sys

count = int(sys.stdin.readline())

for i in range(count):
  for j in range(i+1):
    print('*', end='')
  print() #행 변경
