// common[2] - common[1] 차이값과 common[1] - common[0] 차이값이 같으면 등차수열
// 아니면 등비수열

function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {
        return common.pop() + common[1] - common[0];
    } else {
        return common.pop() * (common[1] / common[0]);
    }
}