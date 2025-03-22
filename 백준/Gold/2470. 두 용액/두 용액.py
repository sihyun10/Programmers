# 투포인터 알고리즘으로 해결
# 투포인터 : 두개의 포인터를 사용해 배열을 탐색하면서 조건을 만족하는 구간이나 값을 찾는다

from sys import stdin
input = stdin.readline

def two_sum(arr):
  start, end = 0, len(arr) - 1
  answer = abs(arr[start] + arr[end])
  final = [arr[start], arr[end]]
  
  while start < end:
    current_sum = arr[start] + arr[end]

    if abs(current_sum) < answer:
      answer = abs(current_sum)
      final = [arr[start], arr[end]]

      if answer == 0:
        break

    if current_sum < 0: # 합이 음수면 0에 가까워지기 위해 start + 1 (오른쪽으로 이동)
      start += 1
    else: # 합이 양수면 0에 가까워지기 위해 end - 1 (왼쪽으로 이동)
      end -= 1
  return final


N = int(input())
values = sorted(list(map(int, input().split(" "))))
result = two_sum(values)
print(result[0], result[1])