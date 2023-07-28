function solution(food) {
    const result = [];
    
    for (let i = 1; i < food.length; i++) {
        result.push((i.toString()).repeat(Math.floor(food[i] / 2)));
    }
    
    const first = result.join('');
    const second = first.split('').reverse().join('');
    
    return first + '0' + second;
}