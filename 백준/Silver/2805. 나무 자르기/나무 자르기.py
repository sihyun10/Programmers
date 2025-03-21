# 절단기 높이가 높을 수록 나무를 덜 얻게 됨
# 절단기 높이가 낮을 수록 더 많은 나무를 얻게 됨
# middle 높이로 자를 때 얻을 수 있는 나무 길이 합이 필요한 M미터 나무 길이보다 작다면 나무가 부족하단 뜻이기 때문에 end값에 middle -1, 크다면 start 값에 middle + 1을 해주면 됨

from sys import stdin
input = stdin.readline

def binary_search(start, end):
  if start > end:
    return end
  
  middle = (start + end) // 2
  sum = 0

  for tree in trees:
    if tree > middle:
      sum += tree - middle

  if sum < M:
    return binary_search(start, middle - 1)
  else:
    return binary_search(middle + 1, end)

N, M = map(int, input().split())
trees = list(map(int, input().split()))

start, end = 1, max(trees)
result = binary_search(start, end)
print(result)
