# deque : 양방향으로 데이터를 추가하거나 제거 가능
# popleft() : 왼쪽의 값을 가져오는 동시에 deque에서 삭제
# rotate(-1) : 왼쪽으로 n칸 밀어서 맨 왼쪽값을 오른쪽에 붙임

from collections import deque
import sys
input = sys.stdin.readline

N = int(input())
cards = deque(list(range(1, N+1)))

while True:
  if len(cards) == 1:
    break

  cards.popleft()
  cards.rotate(-1)

print(cards[0])