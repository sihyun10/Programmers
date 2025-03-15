import sys

# 두 자리수는 무조건 한수 (1~99) 즉. 100보다 작은 수는 모두 한수이기때문에 자신의 숫자를 추출
# 세자리 수는 (첫번째 자리수 값 - 두번째 자리수 값) == (두번째 자리수 값 - 세번째 자리수 값)이면 한수

#한수인지 판별하는 함수
def arithmetic_sequence(num) :
  if num < 100: 
    return num  
    
  count = 99
  
  for i in range(100, num + 1) :
    split_num = list(map(int, str(i))) 
    if (split_num[0] - split_num[1] == split_num[1] - split_num[2]) :
      count += 1
  
  return count


N = int(sys.stdin.readline())
print(arithmetic_sequence(N))
