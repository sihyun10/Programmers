from collections import deque
import sys
input = sys.stdin.readline

N, K = list(map(int, input().split(" ")))
people = deque(list(range(1, N + 1)))
results = []

while people:
  people.rotate(-(K - 1))
  results.append(people.popleft())

print("<" + ", ".join(map(str, results)) + ">")