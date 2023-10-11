// .sort((a, b) => (b+a) - (a+b))  가장 큰 조합부터 내림차순
function solution(numbers) {
    const result = numbers.map(num => String(num)).sort((a,b) => (b+a) - (a+b)).join('');
    return result[0] === '0' ? '0' : result;
}