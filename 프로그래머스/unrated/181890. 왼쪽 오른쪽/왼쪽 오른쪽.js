function solution(str_list) {
    const left_index = str_list.indexOf('l') !== -1 ? str_list.indexOf('l') : Infinity;
    const right_index = str_list.indexOf('r') !== -1 ? str_list.indexOf('r') : Infinity;

    if (left_index < right_index) {
        return str_list.slice(0, left_index);
    } else if (right_index < left_index) {
        return str_list.slice(right_index + 1);
    } else {
        return [];
    }
}
