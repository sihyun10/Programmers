import sys

N = int(sys.stdin.readline())

input_list = []
for _ in range(N):
  input_list.append(sys.stdin.readline().strip("\n"))

set_input = set(input_list)
sorted_list = sorted(set_input, key = lambda x : (len(x), x))

for _ in sorted_list:
  print(_)