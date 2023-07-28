function solution(s) {
    const array = s.split('');
    const result = array.filter((c, index) => {
        return array.indexOf(c) === array.lastIndexOf(c);
    });

    return result.sort().join('');
}