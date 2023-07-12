function solution(dots) {
    const xCoordinates = dots.map(point => point[0]); // x좌표 추출
    const yCoordinates = dots.map(point => point[1]); // y좌표 추출
    
    // x좌표의 |최대값 - 최소값| = 가로길이
    // y좌표의 |최대값 - 최소값| = 세로길이
    const width = Math.abs(Math.max(...xCoordinates) - Math.min(...xCoordinates));
    const height = Math.abs(Math.max(...yCoordinates) - Math.min(...yCoordinates));
    
    return width * height;
}
