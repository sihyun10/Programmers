// 1) Set 객체를 사용해, 중복된 값 제거 후
// 2) 중복제거한 값 길이(=다양하게 고름)와 최대개수를 비교.

function solution(nums) {
    let remove = [...new Set(nums)];
    return (remove.length > nums.length / 2) ? nums.length/2 : remove.length;
}