function solution(N) {
    return N.toString().split('').map(Number).reduce((prev,curr)=>prev+curr);
}