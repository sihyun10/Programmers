function solution(board) {
    const n = board.length;
    const dx = [-1, 1, 0, 0, -1, 1, -1, 1];
    const dy = [0, 0, -1, 1, -1, -1, 1, 1];
    let answer = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                let isSafe = true;
                // 위, 아래, 좌, 우, 대각선 총 8군데의 위치 확인
                for (let k = 0; k < 8; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                        isSafe = false;
                        break;
                    }
                }
                if (isSafe === true) {
                    answer += 1;
                }
            }
        }
    }
    return answer;
}