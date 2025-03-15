import sys

def reverse(str) :
  reverse_str = ""
  for i in str:
    reverse_str = i + reverse_str
  return reverse_str

input_1, input_2 = map(str, sys.stdin.readline().split(" "))

reverse_1 = int(reverse(input_1))
reverse_2 = int(reverse(input_2))

if (reverse_1 >= reverse_2) :
  print(reverse_1)
elif (reverse_1 < reverse_2) :
  print(reverse_2)
