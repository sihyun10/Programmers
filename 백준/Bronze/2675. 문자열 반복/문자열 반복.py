import sys

#문자열을 넣어주면 각 글자마다 반복한 다음 반환해주는 함수
def repeat(my_string, repeat_count):
  combine_string = ""
  for char in my_string:
    combine_string += char * repeat_count
  return combine_string


test_case_count = int(sys.stdin.readline())

results = []
for i in range(test_case_count):
  R, S = sys.stdin.readline().strip().split()
  R = int(R) #반복횟수 int로
  results.append(repeat(S, R))

for _ in results:
  print(_)
