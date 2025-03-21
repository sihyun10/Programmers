import sys

class Stack:
  def __init__(self):
    self.items = []
  
  def size(self):
    return len(self.items)

  def is_empty(self):
    return self.size() == 0
  
  def push(self, item):
    self.items.append(item)
  
  def pop(self):
    return self.items.pop()


if __name__ == "__main__":
  N = int(sys.stdin.readline())
  data = []
  for _ in range(N):
    data.append(list(sys.stdin.readline().strip()))

  for i in data:
    stack = Stack()
    is_valid = True

    for j in i:
      if j == "(":
        stack.push(j)
      elif j == ")":
        if stack.is_empty():
          is_valid = False
          break
        stack.pop()
    
    if is_valid and stack.is_empty():
      print("YES")
    else:
      print("NO")