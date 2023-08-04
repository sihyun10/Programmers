function solution(numbers) {
    const englishStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    englishStr.forEach((str, index) => {
        numbers = numbers.replaceAll(str, index);
    });
    return Number(numbers);
}