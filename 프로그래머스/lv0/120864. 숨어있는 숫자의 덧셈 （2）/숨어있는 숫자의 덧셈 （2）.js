function solution(my_string) {
    let split = my_string.split(/[a-zA-Z]+/);
    let result = 0;

    for (let str of split) {
        if (str !== "") {
            result += parseInt(str, 10);
        }
    }

    return result;
}
