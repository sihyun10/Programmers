import sys

N = int(sys.stdin.readline())

array = []
for _ in range(N):
  array.append(int(sys.stdin.readline()))

# sorted() 내장 함수 사용  
results = sorted(array)

for _ in results:
  print(_)