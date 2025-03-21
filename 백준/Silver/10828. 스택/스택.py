import sys

class Stack:
  def __init__(self):
    self.items = []
  
  def size(self):
    return len(self.items)

  def is_empty(self):
    if self.size() == 0:
      return 1
    return 0
  
  def push(self, item):
    self.items.append(item)
  
  def pop(self):
    if self.is_empty():
      return -1
    return self.items.pop()
  
  def top(self):
    if self.is_empty():
      return -1
    return self.items[-1]


if __name__ == "__main__":
  stack = Stack()
  N = int(sys.stdin.readline().strip())
  results = []

  for _ in range(N):
    command = sys.stdin.readline().strip().split()

    if command[0] == "push":
      stack.push(int(command[1]))
    elif command[0] == "pop":
      results.append(str(stack.pop()))
    elif command[0] == "size":
      results.append(str(stack.size()))
    elif command[0] == "empty":
      results.append(str(stack.is_empty()))
    elif command[0] == "top":
      results.append(str(stack.top()))

  for _ in results:
    print(_)