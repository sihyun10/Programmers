import sys

# N이 20 이하인 입력에 대해서는 2번째 줄부터 수행 과정 출력
# N이 20보다 큰 경우에는 과정은 출력 필요 없음

def hanoi(n, first, second, third):
  if(n == 1):
    print(first, third, sep = " ")
  else:
    hanoi(n-1, first, third, second)
    hanoi(1, first, second, third)
    hanoi(n-1, second, first, third)

N = int(sys.stdin.readline())
print(2**N -1) #총 옮긴 횟수

if(N <= 20):
  hanoi(N, 1, 2, 3)
