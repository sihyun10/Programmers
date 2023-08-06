function solution(babbling) {
    const regExp = /aya|ye|woo|ma/g;
    let result = 0;
    
    for (let i = 0; i < babbling.length; i++) {
        let test = babbling[i].replace(regExp, "");
        if (test === "") {
            result += 1;
        }
    }
    return result;
}