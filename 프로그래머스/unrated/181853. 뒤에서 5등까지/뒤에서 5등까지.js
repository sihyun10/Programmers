function solution(num_list) {
    const sort = num_list.sort((a,b) => {
        return a - b;
    })
    return sort.slice(0, 5)
}