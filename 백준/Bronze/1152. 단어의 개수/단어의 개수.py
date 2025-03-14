import sys

def countCalculator(words) :
  count = 0
  for _ in words:
    count += 1
  return count

input_string = sys.stdin.readline()
results = input_string.strip().split()

print(countCalculator(results))