function solution(num_list, n) {
    const result = [];

    for (let i = 0; i < num_list.length; i += n) {
        const slice = num_list.slice(i, i + n);
        result.push(slice);
    }

    return result;
}