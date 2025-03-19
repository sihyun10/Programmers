import sys

N = int(sys.stdin.readline())
numbers = list(map(int, sys.stdin.readline().split()))

candidate = []
order = [] 

def back(depth):
  if depth == N:
    candidate.append(sum(abs(numbers[order[i+1]] - numbers[order[i]]) for i in range(N-1)))
    return
    
  for i in range(N): 
    if i not in order:
      order.append(i)
      back(depth + 1)
      order.pop() 

back(0)
print(max(candidate))
