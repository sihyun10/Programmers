import sys

N, S = map(int, sys.stdin.readline().split(" "))
data = list(map(int, sys.stdin.readline().split(" ")))

count = 0
select_data = []

def solve(start):
  global count
  if sum(select_data) == S and len(select_data) > 0:
    count += 1
  
  for i in range(start, N):
    select_data.append(data[i])
    solve(i+1)
    select_data.pop()

solve(0)
print(count)