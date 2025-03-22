from sys import stdin
input = stdin.readline

# N : 집의 개수, C : 공유기 개수
N, C = map(int, input().split())
houses = []
for _ in range(N):
  houses.append(int(input()))
houses.sort()

start = 1
end = houses[-1] - houses[0]
result = 0

while start <= end:
  middle = (start + end) // 2
  prev_house = houses[0] #먼저 맨 첫번째 집에 설치
  count = 1

  for i in range(1, len(houses)):
    if houses[i] - prev_house >= middle:
      prev_house = houses[i]
      count += 1

  if count >= C: #공유기 간의 거리를 넓혀야함
    result = middle
    start = middle + 1
  else: #공유기 간의 거리를 좁혀야함
    end = middle - 1

print(result)