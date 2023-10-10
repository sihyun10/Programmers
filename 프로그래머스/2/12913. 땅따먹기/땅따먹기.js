// 주어진 테스트만 통과되고 코드실행하면 다 실패가 뜸
// function solution(land) {
//     let answer = [];
//     let prevIndex = -1;

//     for (let i = 0; i < land.length; i++) {
//         const row = land[i];
        
//         let maxValue = -1;

//         for (let j = 0; j < row.length; j++) {
//             if (j !== prevIndex) {
//                 maxValue = Math.max(maxValue, row[j]);
//             }
//         }
//         answer.push(maxValue);
//         prevIndex = row.indexOf(maxValue);
//     }
    
//     return answer.reduce((acc, val) => acc + val, 0);
// }

// 동적계획법 알고리즘으로 풀어야함
function solution(land) {
    const row = land.length; // 행의 개수
    const column = land[0].length; // 열의 개수

    const dp = Array.from({ length: row }, () => Array(column).fill(0));

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            for (let k = 0; k < column; k++) {
                if (j !== k) {
                    dp[i][j] = Math.max(dp[i][j], land[i][j] + (i === 0 ? 0 : dp[i - 1][k]));
                }
            }
        }
    }
    return Math.max(...dp[row - 1]);
}