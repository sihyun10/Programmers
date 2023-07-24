function solution(array, commands) {
    const result = [];
    for (let i = 0; i < commands.length; i++) {
        for (let j = 0; j < commands[0].length; j++) {
            const slice = array.slice(commands[i][j], commands[i][j+1]);
            result.push(slice.sort((a,b)=> a-b).slice(commands[j+2]-1,commands[j+2]));
        }
    }
    return result;
}