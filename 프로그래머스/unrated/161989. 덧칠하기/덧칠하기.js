function solution(n, m, section) {
    let paint = 0; // 칠한 구역
    let count = 0; // 페인트칠해야 하는 최소 횟수
    
    section.forEach((area) => {
        if(area > paint) {
            paint = area + m - 1;
            count += 1;
        }
    })
    
    return count;
}