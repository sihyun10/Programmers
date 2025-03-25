from collections import deque
import sys
input = sys.stdin.readline

# 보드 초기화, 사과 위치 설정하여 보드 세팅
def initialize_board(N, apples):
    board = [[0] * N for _ in range(N)]
    for r, c in apples:
        board[r-1][c-1] = 1 #사과 위치는 1
    return board

# 뱀 이동
def move_snake(snake, direction, N):
    head_x, head_y = snake[0]
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]  # 우, 하, 좌, 상
    dx, dy = directions[direction]
    new_x, new_y = head_x + dx, head_y + dy

    # 게임 종료 조건
    if not (0 <= new_x < N and 0 <= new_y < N) or (new_x, new_y) in snake:
        return False
    
    snake.appendleft((new_x, new_y))
    return True

# 방향 변경
def change_direction(direction, turn):
    if turn == "L":  # 왼쪽 회전
        direction = (direction - 1) % 4
    elif turn == "D":  # 오른쪽 회전
        direction = (direction + 1) % 4
    return direction

# 뱀 게임 플레이
def play_snake_game(N, apples, moves):
    board = initialize_board(N, apples)
    move_dict = {}
    for move in moves:
        time, direction = move
        move_dict[time] = direction
    
    snake = deque([(0,0)])
    direction = 0
    time = 0

    while True:
        time += 1
        if not move_snake(snake, direction, N):
            return time
        
        head_x, head_y = snake[0]
        #사과 유무
        if board[head_x][head_y] == 1:
            board[head_x][head_y] = 0 #사과 먹었을때 0으로 다시 바꿈
        else:
            snake.pop()

        if time in move_dict:
            direction = change_direction(direction, move_dict[time])

if __name__ == "__main__":
    N = int(input()) #보드의 크기
    K = int(input()) #사과의 개수
    apples = []
    for _ in range(K):
        apples.append(tuple(map(int, input().split())))
    
    L = int(input())
    moves = []
    for _ in range(L):
        time, direction = input().split()
        moves.append((int(time), direction))
    
    print(play_snake_game(N, apples, moves))