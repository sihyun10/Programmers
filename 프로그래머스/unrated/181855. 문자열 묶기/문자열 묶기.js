function solution(strArr) {
    const dict = strArr.reduce((acc, item) => {
        const length = item.length;
        acc[length] = (acc[length] || []).concat(item);
        return acc;
    }, {});
    
    const maxCount = Math.max(...Object.values(dict).map(arr => arr.length));
    return maxCount;
}