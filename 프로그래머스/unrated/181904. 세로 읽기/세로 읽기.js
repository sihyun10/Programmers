function solution(my_string, m, c) {
    if (m > 1) {
        let result = [];
        for (let i = 0; i < my_string.length; i += m) {
            let j = i + m;
            result.push(my_string.slice(i, j));
        }

        let vertically = [];
        for (let k = 0; k < result.length; k++) {
            if (result[k].length >= c) {
                vertically.push(result[k][c - 1]);
            }
        }
        return vertically.join('');
    } else {
        return my_string;
    }
}
