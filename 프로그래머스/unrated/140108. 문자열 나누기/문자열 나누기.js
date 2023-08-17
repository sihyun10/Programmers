function solution(s) {
    let x = 0;
    let x_count = 0;
    let result = [];
    
    for(i = 0; i < s.length; i++){
        if(s[i] === s[x]) {
            x_count += 1;
        } else {
            x_count -= 1;
        }
        
        if(x_count === 0) {
            result.push(s.substring(x, i+1));
            x = i+1;
        }
    }
    
    if(result.join('').length === s.length) {
        return result.length;
    } else {
        return result.length + 1; // 처리되지 않은 문자열은 하나의 문자열로 보기에 1 더해준다.
    }
}