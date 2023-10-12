// 아래에서부터 위로 올라가며 각 위치의 최대 경로 합을 구함
// 따라서 triangle[i][j]에 누적해 더해가며 각 층의 원소는 거쳐간 숫자의 최대합을 나타낸다.
// 마지막 triangle[0][0] 을 출력하면 전체 삼각형에서의 최대 경로 합이 계산됨

function solution(triangle) {
    for(let i = triangle.length-2; i >= 0; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }
    return triangle[0][0];
}