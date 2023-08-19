function solution(s) {
    let conversion = 0; // 이진변환 횟수
    let remove = 0; // 제거된 모든 0의 개수
    
    while(s !== '1') {
        remove += s.length - s.replace(/0/g, '').length;
        s = s.replace(/0/g, '').length.toString(2);
        conversion += 1;
    }
    return [conversion, remove];
}