function solution(n) {
    let countN = n.toString(2).replace(/0/g,'').length; // 2진수 변환 ->1의개수
    for(let i = n+1; i > n; i++) {
        let countI = i.toString(2).replace(/0/g,'').length;
        if(countN === countI) {
            return i;
        }
    }
}