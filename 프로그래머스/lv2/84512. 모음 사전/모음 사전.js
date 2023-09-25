function solution(word) {
    const dictionary = ['A', 'E', 'I', 'O', 'U'];
    const counts = [781, 156, 31, 6, 1]; // 각 자리수별 가능한 단어 수
    
    let answer = 0;
    for (let i = 0; i < word.length; i++) {
        answer += dictionary.indexOf(word[i]) * counts[i] + 1;
    }
    
    return answer;
}