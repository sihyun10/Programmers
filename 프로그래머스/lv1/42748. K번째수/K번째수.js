function solution(array, commands) {
    const result = [];
    
    for (let i = 0; i < commands.length; i++) {
        const [start, end, k] = commands[i];
        const slice = array.slice(start - 1, end);
        const sort = slice.sort((a,b)=> a-b);
        result.push(sort[k-1]);
    }
    return result;
}