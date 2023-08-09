function solution(array) {
    const counter = new Map();

    for (const num of array) {
        counter.set(num, (counter.get(num) || 0) + 1);
    }

    let maxCount = 0;
    let mostFrequent = -1;
    let multipleMax = false;

    for (const [num, count] of counter) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = num;
            multipleMax = false;
        } else if (count === maxCount) {
            multipleMax = true;
        }
    }
    
    return (multipleMax === true) ? -1 : mostFrequent;
}