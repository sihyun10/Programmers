function solution(before, after) {
    const sortedBefore = [...before].sort().join('');
    const sortedAfter = [...after].sort().join('');
    
    if (sortedBefore === sortedAfter) {
        return 1;
    } else {
        return 0;
    }
}
