function solution(n) {
    // 3으로 나눈 나머지 경우가 0,1,2 값 -> 순서대로 4,1,2
    const remainderCase = ["4","1","2"];
    let answer = "";
    
    while(n > 0){
        answer = remainderCase[n % 3] + answer;
        n = parseInt((n - 1) / 3);
    }
    return answer;
}