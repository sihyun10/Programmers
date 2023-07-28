function solution(arr) {
    if (arr.includes(2) === true) {
        let indices = [];
        let find = 2;
        let idx = arr.indexOf(find);
        while (idx != -1) {
            indices.push(idx);
            idx = arr.indexOf(find, idx + 1);
        }
        return (indices.length > 1) ? arr.slice(indices[0], indices[indices.length - 1] + 1) : arr.slice(indices[0], indices[0] + 1);
    } else {
        return [-1];
    }
}