from sys import stdin
input = stdin.readline

def binary_search(data, target):
  start = 0
  end = len(data) - 1

  while True:
    middle = (start + end) // 2
    
    if data[middle] == target:
      return middle
    elif data[middle] < target:
      start = middle + 1
    else:
      end = middle - 1
    if start > end:
      break

  return -1


if __name__ == "__main__":
  N = int(input())
  A = sorted(list(map(int, input().split())))

  M = int(input())
  X = list(map(int, input().split()))

  results = []

  for i in X:
    idx = binary_search(A, i)
    if idx == -1:
      print("0")    
    else:
      print("1")

