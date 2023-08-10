function solution(s) {
    const remove = s.split(' ');
    const min = Math.min(...remove);
    const max = Math.max(...remove);
    
    return `${min} ${max}`;
}