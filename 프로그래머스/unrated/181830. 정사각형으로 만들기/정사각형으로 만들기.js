function solution(arr) {
    const rows = arr.length; // 행의 길이
    const columns = arr[0].length; // 열의 길이
    
    if(rows > columns) {
        const colPlus = new Array(rows - columns).fill(0);
        return arr.map(a => [...a, ...colPlus]);
    } else if (rows < columns) {
        for(let i = 0; i < columns - rows; i++) {
            const rowPlus = new Array(columns).fill(0);
            arr.push(rowPlus);
        }   
    }
    return arr;
}