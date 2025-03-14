import sys

x, y, w, h = map(int, sys.stdin.readline().split())
print(min(x, y, h-y, w-x))