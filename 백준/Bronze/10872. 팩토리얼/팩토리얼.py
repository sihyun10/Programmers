import sys

def factorial(n):
  if (n > 0):
    return n * factorial(n-1)
  elif (n == 0):
    return 1


N = int(sys.stdin.readline())
print(factorial(N))