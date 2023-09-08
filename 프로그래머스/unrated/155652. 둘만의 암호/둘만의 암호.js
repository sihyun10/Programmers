function solution(s, skip, index) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const remove = [...alphabet].filter(char => !skip.includes(char));
    
    const arr = s.split(''); // 배열로 분할
    
    const changeAlphabet = arr.map(char => {
        const charIndex = remove.indexOf(char);
        const newIndex = (charIndex + index) % remove.length;
        return remove[newIndex];
    });
    
    const result = changeAlphabet.join(''); // 다시 문자열로 결합
    return result;
}