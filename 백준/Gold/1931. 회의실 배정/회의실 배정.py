import sys
input = sys.stdin.readline  

N = int(input()) #회의의 수
meeting_inf = [list(map(int, input().strip().split())) for _ in range(N)]
meeting_inf.sort(key=lambda x: (x[1], x[0])) # 끝나는 시간을 기준으로 내림차순

end_time = 0
count = 0

# (수정) -> meet_usage_table 배열에 회의 정보를 저장 x -> 회의 수를 바로 셀 수 있도록
for meeting in meeting_inf:
  if meeting[0] >= end_time:
    count += 1
    end_time = meeting[1]
  
print(count)
