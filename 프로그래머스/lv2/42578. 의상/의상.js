function solution(clothes) {
    const clothesCount = {};

    for (const clothe of clothes) {
        const clothType = clothe[1];
        if (clothesCount[clothType]) {
            clothesCount[clothType] += 1;
        } else {
            clothesCount[clothType] = 1;
        }
    }

    // 의상 종류별로 (의상 수 + 1)을 곱해 조합의 수 계산
    let answer = 1;
    for (const type in clothesCount) {
        answer *= (clothesCount[type] + 1);
    }

    // 모든 종류의 의상을 입지 않는 경우 -1
    return answer - 1;
}
