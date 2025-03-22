from sys import stdin
input = stdin.readline

class Stack:
  def __init__(self):
    self.items = []  
  
  def size(self):
    return len(self.items)
  
  def push(self, item):
    self.items.append(item)
  
  def pop(self):
    return self.items.pop()
  
  def is_empty(self):
    return self.size() == 0

if __name__ == "__main__":
  stack = Stack()

  N = int(input())
  towers = list(map(int, input().split()))
  stack.push([1, towers[0]])
  result = [0]

  for i in range(1, N):
    while not stack.is_empty():
      if stack.items[-1][1] >= towers[i]:
        result.append(stack.items[-1][0])
        stack.push([i+1, towers[i]])
        break
      else:
        stack.pop()
      
    if stack.is_empty():
      result.append(0)
    stack.push([i+1, towers[i]])
  
  print(*result)