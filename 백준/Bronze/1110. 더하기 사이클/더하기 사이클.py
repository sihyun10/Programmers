import sys

N = int(sys.stdin.readline().strip()) 
setting_num = N  # 원래 숫자값 저장
count = 0

while True:
  a = setting_num // 10  # 십의 자리
  b = setting_num % 10   # 일의 자리
  c = (a + b) % 10 #더한 값의 일의자리
  setting_num = (b * 10) + c
  count += 1
  
  if setting_num == N:
    break

print(count)
