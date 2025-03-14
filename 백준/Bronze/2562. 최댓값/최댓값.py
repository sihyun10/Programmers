import sys

values = []

for i in range(9) :
  values.append(int(sys.stdin.readline()))

max_value = max(values)
print(max_value)

for i in range(9):
  if values[i] == max_value:
    print(i+1)
