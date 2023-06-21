function solution(a, b) {
    let str = a.toString();
    let str1 = b.toString();
    
    let answer1 = str.concat(str1);
    let answer2 = str1.concat(str);
    
    if(answer1 >= answer2) {
        return Number(answer1);
    }
    return Number(answer2);
}