import sys
input = sys.stdin.readline

def calculate_max_area(histogram):
  n = histogram[0]
  stack = []
  max_area = 0  

  for i in range(1, n + 1):
    index = i
    max_area = process_stack(stack, histogram[i], index, max_area)
    stack.append((index, histogram[i]))

  max_area = process_remaining_stack(stack, n, max_area)
  print(max_area)

def process_stack(stack, current_height, index, max_area):
  while stack and stack[-1][1] > current_height:
    prev_index, height = stack.pop()
    if stack:
      width = index - stack[-1][0] -1
    else:
      width = index - 1
    max_area = max(max_area, height * width)
  return max_area

def process_remaining_stack(stack, n, max_area):
  while stack:
    prev_index, height = stack.pop()
    if stack:
      width = n - stack[-1][0]
    else:
      width = n
    max_area = max(max_area, height * width)
  return max_area

while True:
  histogram = list(map(int, input().split()))
  if histogram[0] == 0:
    break
  calculate_max_area(histogram)