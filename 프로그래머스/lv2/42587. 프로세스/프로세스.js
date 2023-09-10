function solution(priorities, location) {
    let arr = [];
    for(let i = 0; i < priorities.length; i++) {
        arr.push(i);
    }
    
    let answer = 0;
    while(priorities.length > 0) {
        if(priorities[0] < Math.max(...priorities)) {
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            answer += 1;
            priorities.shift();
            if(arr.shift() === location) {
                return answer;
            }
        }
    }
}