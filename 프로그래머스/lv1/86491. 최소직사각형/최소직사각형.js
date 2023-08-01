function solution(sizes) {
    let [minLength, maxLength] = sizes.reduce((prev,curr) => {
        prev[0].push(Math.min(curr[0], curr[1]));
        prev[1].push(Math.max(curr[0], curr[1]));
        return prev;
    }, [[], []]);
    
    return Math.max(...minLength) * Math.max(...maxLength);
}