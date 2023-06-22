function solution(num_list) {
    const even = num_list.filter((i) => i % 2 != 0).join(''); // 홀수
    const odd = num_list.filter((i) => i % 2 === 0).join(''); // 짝수
    const answer = Number(even) + Number(odd);
    return answer;
}

// 풀이방법) 각 리스트 인덱스 값이 홀수인지 짝수인지 구분
// 구분 후 이어붙이기 - 배열의 요소들을 연결하여 하나의 문자열로 만드는 함수. (Array.join([separator]))
// 이어붙인 홀수값 + 이어붙인 짝수 [합 구하기]