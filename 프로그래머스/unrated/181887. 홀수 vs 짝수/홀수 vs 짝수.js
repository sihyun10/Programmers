function solution(num_list) {
    return Math.max(...num_list.reduce((acc, cur, idx) => {
        if(idx % 2 === 0) {
            return [acc[0], acc[1]+=cur];
            console.log([acc[0], acc[1]+=cur]);
        } 
        return [acc[0]+=cur, acc[1]];
    }, [0, 0]));
}

// reduce() : 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
// 리듀서 함수는 네 개의 인자를 가집니다. 누산기 (acc), 현재 값 (cur), 현재 인덱스 (idx), 원본 배열 (src)