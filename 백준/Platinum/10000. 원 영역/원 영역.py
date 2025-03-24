import sys
input = sys.stdin.readline

N = int(input())

values = []
for _ in range(N):
    c, r = list(map(int, input().split()))
    values.append(["L", c-r])
    values.append(["R", c+r])

values.sort(key=lambda p: (-p[1], p[0]), reverse=True)

def count_circle_regions(values):
    stack = []
    count = 1
    
    for value in values:
        if value[0] == "L":
            stack.append(value)
        else:
            cum_width = 0
            
            while stack:
                prev = stack.pop()
                
                if prev[0] == "L":
                    width = value[1] - prev[1]

                    if width == cum_width:
                        count += 2
                    else:
                        count += 1

                    stack.append(["C", width]) 
                    break

                elif prev[0] == "C":
                    cum_width += prev[1]
    return count
    
result = count_circle_regions(values)
print(result)