import sys
input = sys.stdin.readline

def mul_value(a, n, c):
    if n == 0:
        return 1
    
    half_value = mul_value(a, n // 2, c) % c
    if n % 2 == 0:
        return (half_value * half_value) % c
    return (half_value * half_value * a) % c


A,B,C = map(int, input().split(" "))
print(mul_value(A,B,C))
