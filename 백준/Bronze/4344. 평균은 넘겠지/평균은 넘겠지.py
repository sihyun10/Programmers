import sys

#평균 계산 함수
def calculate_average(scores, student_count):
    total_sum = 0
    for score in scores:
        total_sum += score
    return total_sum / student_count

# 평균을 초과하는 학생 수 계산 함수
def count_above_average(scores, average):
    exceed_count = 0
    for score in scores:
        if score > average:
            exceed_count += 1
    return exceed_count


test_case_count = int(sys.stdin.readline())

data = [0] * test_case_count
for _ in range(test_case_count):
  data[_] = list(map(int, sys.stdin.readline().split()))


students_percent = []

for i in range(len(data)):
    student_count = data[i][0] #학생 수
    scores = data[i][1:]  # 학생들 점수 리스트
    
    average = calculate_average(scores, student_count)
    exceed_count = count_above_average(scores, average)

    students_percent.append((exceed_count / student_count) * 100)

for percent in students_percent:
    print(f"{percent:.3f}%")
