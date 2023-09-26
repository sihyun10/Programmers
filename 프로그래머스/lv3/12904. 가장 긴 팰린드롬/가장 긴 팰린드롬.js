function solution(s) {
    const n = s.length;
    const isPalindrome = Array.from({ length: n }, () => Array(n).fill(false));
    let maxLength = 1;

    // 길이가 1 => 항상 팰린드롬
    for (let i = 0; i < n; i++) {
        isPalindrome[i][i] = true;
    }

    // 길이가 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            isPalindrome[i][i + 1] = true;
            maxLength = 2;
        }
    }

    // 길이가 3 이상
    for (let len = 3; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            const j = i + len - 1;

            // 문자열의 양 끝 같고, 그 사이 문자열이 팰린드롬인 경우
            if (s[i] === s[j] && isPalindrome[i + 1][j - 1]) {
                isPalindrome[i][j] = true;
                maxLength = Math.max(maxLength, len);
            }
        }
    }

    return maxLength;
}