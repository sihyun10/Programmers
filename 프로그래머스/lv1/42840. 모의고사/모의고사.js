function solution(answers) {
    // 1~3번 수포자가 찍는 패턴
    const person1 = [1, 2, 3, 4, 5];
    const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const score = [0, 0, 0];
    
    // 3명의 수포자 패턴과 주어진 문제의 정답(answers) 비교하면서, 맞힌 문제 개수 각각 score 배열에 저장
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === person1[i % person1.length]) {
            score[0] += 1;
        }
        if (answers[i] === person2[i % person2.length]) {
            score[1] += 1;
        }
        if (answers[i] === person3[i % person3.length]) {
            score[2] += 1;
        }
    }
    
    // 가장 높은 점수 받은 사람
    const max = Math.max(...score);
    const highCorrect = [];
    for (let j = 0; j < score.length; j++) {
        if (score[j] === max) {
            highCorrect.push(j + 1); // 인덱스값 + 1 을 해야 1,2,3 수포자 삼인방이 출력될 수 있음
        }
    }
    return highCorrect;
}