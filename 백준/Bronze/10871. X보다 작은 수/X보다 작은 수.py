import sys

N, X = map(int, sys.stdin.readline().split())
sequence_of_numbers = list(map(int, sys.stdin.readline().split()))

result = []
for i in range(N):
  if (sequence_of_numbers[i] < X) :
    print(sequence_of_numbers[i], end =" ")
