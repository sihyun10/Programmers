import sys
input = sys.stdin.readline

def divide_paper(y, x, dist):
  color = paper[y][x]

  for i in range(y, y+dist):
    for j in range(x, x+dist):
      if paper[i][j] != color:
        divide_paper(y, x, dist//2)
        divide_paper(y, x+dist//2, dist//2)
        divide_paper(y+dist//2, x, dist//2)
        divide_paper(y+dist//2, x+dist//2, dist//2)
        return
      
  if color == 0:
    result[0] += 1
  else:
    result[1] += 1

N = int(input())
paper = []
for _ in range(N):
  paper.append(list(map(int, input().split(" "))))

result = [0, 0]
divide_paper(0,0,N)

print(result[0])
print(result[1])
