function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer= "";

    for(let i =0; i <s.length; i++){
        if(s[i] == " ") {
            answer += " "; 
            continue;
        }
        
        let textArr = upper.includes(s[i]) ? upper : lower;
        let index = textArr.indexOf(s[i]) + n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}