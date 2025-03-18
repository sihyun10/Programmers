import sys

N = int(sys.stdin.readline().strip())

pos = [0] * N
flag_a = [False] * N
flag_b = [False] * (N * 2 -1)
flag_c = [False] * (N * 2 -1)
count = 0

def set(i: int) -> None:
  global count

  if i == N:
    count += 1
    return

  for j in range(N):
    if not flag_a[j] and not flag_b[i+j] and not flag_c[i-j+N-1]:
      pos[i] = j
      flag_a[j] = flag_b[i+j] = flag_c[i-j+N-1] = True
      set(i+1)
      flag_a[j] =  flag_b[i+j] = flag_c[i-j+N-1] = False  

set(0)
print(count)