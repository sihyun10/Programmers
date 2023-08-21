// 1) 중복된 단어 등장 금지
// 2) 자신의 차례 이전에 끝나는 말로 시작하는지 확인

function solution(n, words) {
    for (let i = 1; i < words.length; i++) {
        const curr = words[i];
        if (words.indexOf(curr) !== i) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
        
        const lastWord = words[i - 1].slice(-1);
        const firstWord = curr.slice(0,1);
        if (lastWord !== firstWord) {
            return [i % n + 1, Math.floor(i / n) + 1];
        }
    }
    return [0, 0];
}