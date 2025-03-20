#다이나믹 프로그래밍 : 앞에서 계산한 식을 미리 배열에 저장
import sys

n = int(sys.stdin.readline())
arr = [0] * 11
arr[1] = 1
arr[2] = 2
arr[3] = 4

#주어진 정수 n의 값은 양수이며, 11보다 작음
for i in range(4, 11):
  arr[i] = arr[i-1] + arr[i-2] + arr[i-3]

results = []
for i in range(0, n):
  testNum = int(sys.stdin.readline())
  results.append(arr[testNum])

for _ in results:
  print(_)
