import sys
input = sys.stdin.readline

# 이진 탐색으로 문제를 접근
def binary_search(arr, target):
  left, right = 0, len(arr) - 1

  while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
      return "1"
    elif arr[mid] > target:
      right = mid-1
    else:
      left = mid+1
  return "0"

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
targets = list(map(int, input().split()))

cards = sorted(cards)

results = []
for target in targets:
  results.append(binary_search(cards, target))

print(" ".join(results))
