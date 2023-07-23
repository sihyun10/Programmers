function solution(s) {
    const words = s.split(' ');

    const result = words.map((word) => {
        return word.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
    });

    return result.join(' ');
}