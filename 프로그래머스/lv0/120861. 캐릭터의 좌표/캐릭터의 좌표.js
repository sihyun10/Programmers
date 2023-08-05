function solution(keyinput, board) {
    let result = [0,0];
    
    const width = Math.floor(board[0] / 2);
    const height = Math.floor(board[1] / 2);
    
    for(let i = 0; i < keyinput.length; i++) {
        if(keyinput[i] === "left" && result[0] > -width) {
            result[0] -= 1;
        } else if (keyinput[i] === "right" && result[0] < width) {
            result[0] += 1;
        } else if (keyinput[i] === "up" && result[1] < height) {
            result[1] += 1;
        } else if (keyinput[i] === "down" && result[1] > -height) {
            result[1] -= 1;
        }
    }
    return result;
}
