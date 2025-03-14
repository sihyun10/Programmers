import sys

def score_caculator(result):
  score = 0
  total_score = 0

  for i in result:
    if (i == "O"):
      score += 1
      total_score += score
    else:
      score = 0

  return total_score


test_case_count = int(sys.stdin.readline())

results = []
for i in range(test_case_count):
  results.append(sys.stdin.readline())

for i in range(test_case_count):
  print(score_caculator(results[i]))