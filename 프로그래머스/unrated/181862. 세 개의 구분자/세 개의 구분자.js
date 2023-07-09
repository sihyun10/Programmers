// split()은 하나의 구분자만 수행할 수 있다. 따라서 정규식을 사용.
// const re = /[a-z]/    -- a~z 사이의 모든 문자

function solution(myStr) {
    const result = myStr.split(/[a-c]/g).filter(str => str !== '');  

    if (result.length === 0) {
        return ["EMPTY"];
    } else {
        return result;
    }
}