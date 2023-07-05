function solution(str_list, ex) {
    let result = '';
    
    for(let i=0; i < str_list.length; i++) {
        if (str_list[i].includes(ex) === true) {
            result += str_list[i].slice(i,i);
        } else {
            result += str_list[i];
        }
    }
    return result;
}