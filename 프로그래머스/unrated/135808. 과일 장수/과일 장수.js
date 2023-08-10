// 최대 이익 = (최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수)
// 먼저 내림차순을 시킨다음 score.length를 m으로 나눈값이 총 상자개수이다.
// 이 수만큼 반복문을 돌리며, score[idx] * m을 result에 누적합

function solution(k, m, score) {
    score.sort((a, b) => b - a);
    let idx = m - 1; // 최저 사과 점수에 해당하는 인덱스값
    let result = 0;
    
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        result += score[idx] * m;
        idx += m;
    }
    return result;
}