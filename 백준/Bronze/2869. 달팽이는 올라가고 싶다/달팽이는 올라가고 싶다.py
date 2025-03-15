import sys

A, B, V = map(int, sys.stdin.readline().split())

days = (V - A) // (A - B)

#마지막 날 전에 정상에 못 도착했기에 하루 추가
if (V - A) % (A - B) != 0:
    days += 1

# 마지막날 전날까지 구했기 때문에 최종 걸린 날짜는 + 1 해줘야함
print(days+1)
