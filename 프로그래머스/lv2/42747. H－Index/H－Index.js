// 각 위치의 값과 위치(인덱스값)를 비교하면서 H-Index의 후보 값을 찾아감

function solution(citations) {
    citations.sort((a, b) => b - a);

    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1;
        }
    }
    return hIndex;
}
