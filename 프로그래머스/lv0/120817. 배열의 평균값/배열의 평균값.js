function solution(numbers) {
    return numbers.reduce((prev,curr) => prev + curr) / numbers.length;
}