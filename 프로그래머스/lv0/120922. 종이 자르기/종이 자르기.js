// M이 가로길이를 뜻하고, N은 세로길이를 뜻한다.

function solution(M, N) {
    let width = M-1;
    let height = (N-1)*M;
    
    return width + height;
}