import sys

class Stack:
  def __init__(self):
    self.items = []
  
  def size(self):
    return len(self.items)

  def push(self, item):
    self.items.append(item)

if __name__ == "__main__":
  stack = Stack()
  N = int(sys.stdin.readline())

  data = []
  for _ in range(N):
    data.append(int(sys.stdin.readline().strip()))

  max_value = 0

  for value in reversed(data):
    if max_value < value:
      max_value = value
      stack.push(value)

  print(stack.size())