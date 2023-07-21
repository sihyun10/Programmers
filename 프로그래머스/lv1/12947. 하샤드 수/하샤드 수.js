function solution(x) {
    const sum = (x+'').split('').map(Number).reduce((prev,cur)=> prev + cur, 0);
    return (x % sum === 0) ? true : false;
}