function solution(n) {
    let arr = n.toString().split('').map(Number);
    let result = arr.reduce(function(prev,curr) {return prev+curr;});
    
    return result;
}