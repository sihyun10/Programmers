import sys

N = int(sys.stdin.readline())
count_arr = [0] * (10000 + 1)

for _ in range(N):
  count_arr[int(sys.stdin.readline())] += 1
  
for i in range(len(count_arr)):
  for _ in range(count_arr[i]):
    print(i)