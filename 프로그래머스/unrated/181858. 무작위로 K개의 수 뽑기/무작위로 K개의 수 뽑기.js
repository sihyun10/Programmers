function solution(arr, k) {
    let remove = [...new Set(arr)];
    
    if (remove.length > k) {
        return remove.slice(0,k);
    } else if (remove.length < k) {
        const plus = Array(k - remove.length).fill(-1);
        return remove.concat(plus);
    } else {
        return remove;
    }
}