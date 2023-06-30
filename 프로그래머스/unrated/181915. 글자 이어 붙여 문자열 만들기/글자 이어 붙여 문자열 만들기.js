function solution(my_string, index_list) {
    let result = "";
    for (let i=0; i < index_list.length; i++) {
        let list = index_list[i];
        result += my_string[list];
    } return result;
}