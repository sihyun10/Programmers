import sys

def count_digits(numbers) :
  count_list = [0] * 10 # 0~9까지 몇번 쓰였는지 횟수 저장

  for num in str(numbers):
    count_list[int(num)] += 1
  
  return count_list


A = int(sys.stdin.readline())
B = int(sys.stdin.readline())
C = int(sys.stdin.readline())

multipli_value = A * B * C

results = count_digits(multipli_value)

for _ in results:
  print(_)
