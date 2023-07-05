function solution(my_strings, parts) {
    let substring = '';
    
    for(let i=0; i < my_strings.length; i++) {
        let condition = parts[i];
        substring += my_strings[i].slice(condition[0],condition[1]+1);
    }
    
    return substring;
}