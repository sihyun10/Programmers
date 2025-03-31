import sys

sys.setrecursionlimit(10 ** 6) # 재귀 최대 깊이 설정
input = sys.stdin.readline

def postorder(start, end):
  if start > end:
    return
  
  root = node[start]
  right = start + 1

  while right <= end and node[right] < root:
    right += 1
  
  postorder(start + 1, right - 1) #왼쪽 서브트리
  postorder(right, end) #오른쪽 서브트리
  print(root)
  
# 입력 개수가 주어지지않을때 (try ~ except구문 활용)
node = []
while True:
  try:
    node.append(int(input().strip()))
  except:
    break

postorder(0, len(node) - 1)