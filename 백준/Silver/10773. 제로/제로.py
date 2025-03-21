import sys

class Stack:
  def __init__(self):
    self.items = []
  
  def push(self, item):
    self.items.append(item)
  
  def pop(self):
    return self.items.pop()


if __name__ == "__main__":
  stack = Stack()
  N = int(sys.stdin.readline())

  for _ in range(N):
    num = int(sys.stdin.readline().strip())

    if num > 0:
      stack.push(num)
    elif num == 0:
      stack.pop()

  print(sum(stack.items))