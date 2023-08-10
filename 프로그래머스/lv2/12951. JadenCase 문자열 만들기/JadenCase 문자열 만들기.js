function solution(s) {
    const split = s.toLowerCase().split(' ');
    return split.map((a) => a.charAt(0).toUpperCase() + a.slice(1)).join(' ');
}