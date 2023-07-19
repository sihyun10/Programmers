function solution(price, money, count) {
    let result = 0;
    
    for(let i = 1; i <= count; i++) {
        result += price * i;
    }
    
    if (result <= money) return 0;
    else return result-money;
}