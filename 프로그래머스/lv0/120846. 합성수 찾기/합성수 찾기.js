function solution(n) {
    let arr = new Set(); // 중복 허용 X
    for(let i = 1; i <= n; i++){
        for(let j = 2; j < i; j++){
            if(i % j === 0)
                arr.add(i);
        }
    }
    return arr.size;
}