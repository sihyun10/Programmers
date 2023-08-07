function solution(arr) {
    let result = 0;

    while (true) {
        let nextArr = arr.map(item => {
            if (item >= 50 && item % 2 === 0) {
                return item / 2;
            } else if (item < 50 && item % 2 !== 0) {
                return (item * 2) + 1;
            }
            return item;
        });

        // 두 배열이 같은지 확인 (JSON.stringify)
        if (JSON.stringify(arr) === JSON.stringify(nextArr)) {
            return result;
        }

        arr = nextArr; // arr 업데이트
        result++; // x 증가
    }
}