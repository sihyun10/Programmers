function solution(msg) {
    const dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let currentWord = ''; // 현재 처리중인 단어
    const answer = [];

    for (let i = 0; i < msg.length; i++) {
        currentWord += msg[i];
        
        if (!dictionary.includes(currentWord)) {
            const lastIndex = dictionary.indexOf(currentWord.slice(0, -1)) + 1;
            answer.push(lastIndex);

            dictionary.push(currentWord);

            currentWord = msg[i];
        }
    }

    if (currentWord.length > 0) {
        answer.push(dictionary.indexOf(currentWord) + 1);
    }
    
    return answer;
}