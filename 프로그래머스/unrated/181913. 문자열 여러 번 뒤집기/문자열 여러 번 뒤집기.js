// 풀이방법
// queries 의 [s,e] s부터 e까지 뒤집고, 뒤집은 글자와 원래 글자를 합쳐준다. 문자열 합치는 방법은 (+, concat, join) 이렇게다. for 문을 돌려 계속 반복한다.

// 예시 코드 (문자열 뒤집기)
// const str = 'Hello, World';
// const reversed = str.split('').reverse().join('');
// split('')은 문자열의 문자들을 1개씩 분리하여 배열로 만든다. reverse()는 배열에 있는 요소들의 순서를 역순으로 변경한다. join('')은 배열의 요소들을 하나의 문자열로 합친다.

function solution(my_string, queries) {
    let modifiedString = my_string;
    
    for (let i=0; i < queries.length; i++) {
        let start = queries[i][0];
        let end = queries[i][1];
        
        let substring = modifiedString.substring(start, end+1);
        let reversedSubString = substring.split("").reverse().join("");
        
        modifiedString = modifiedString.slice(0,start) + reversedSubString + modifiedString.slice(end + 1);
    }
    return modifiedString;
}