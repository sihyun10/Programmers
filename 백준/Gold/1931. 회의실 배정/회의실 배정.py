import sys
input = sys.stdin.readline  

N = int(input()) #회의의 수
meeting_inf = [list(map(int, input().strip().split())) for _ in range(N)]
meeting_inf.sort(key=lambda x: (x[1], x[0])) # 끝나는 시간을 기준으로 내림차순

meet_usage_table = []
end_time = 0

for meeting in meeting_inf:
  if len(meeting_inf) == 0:
    meet_usage_table.append(meeting)
    end_time = meeting[1]
  
  if meeting[0] >= end_time:
    meet_usage_table.append(meeting)
    end_time = meeting[1]
  
print(len(meet_usage_table))