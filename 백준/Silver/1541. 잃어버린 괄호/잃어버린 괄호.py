import sys
input = sys.stdin.readline  

plus = "+"
minus = "-"

def calculator_plus(value) :
  return sum(map(int, value.split(plus)))

expression = list(map(str, input().strip().split(minus)))

calculate = 0
front = calculator_plus(expression[0])
calculate += front

for x in expression[1:]:
  calculate -= calculator_plus(x)

print(calculate)