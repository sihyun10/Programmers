import sys

def minus_list(values) :
  minus_list = []
  for i in range(len(values) - 1) :
    minus_list.append(abs(values[i] - values[i + 1]))
  return minus_list


width, height = map(int, sys.stdin.readline().split(" "))
dot_line_count = int(sys.stdin.readline())

row = [0, width]
column = [0, height]

for i in range(dot_line_count) :
  r_or_c, dot_line = map(int, sys.stdin.readline().split(" "))
  if (r_or_c == 0):
    column.append(dot_line)
  elif (r_or_c == 1):
    row.append(dot_line)

row.sort()
column.sort()

max_row = max(minus_list(row))
max_column = max(minus_list(column))

print(max_row * max_column)
