function solution(array, n) {
    const differences = array.map(x => Math.abs(x - n));
    const minValue = Math.min(...differences);
    const smallNumber = array.filter((value, index) => differences[index] === minValue);
    return Math.min(...smallNumber);
}