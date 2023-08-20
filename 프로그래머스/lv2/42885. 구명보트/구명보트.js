// 최소한의 구명보트로 구출해야하기때문에, 가장 무거운 사람과 가장 가벼운 사람을 함께 구명보트에 태우는것이 가장 효율적이다. [탐욕법 알고리즘 : 선택의 순간마다 당장 눈앞에 보이는 '최적의 상황'만을 쫓아 최종적인 해답에 도달]

function solution(people, limit) {
    let answer = 0;
    people = people.sort((a, b) => a - b); // 오름차순

    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left += 1;
        }
        right -= 1;
        answer += 1;
    }
    return answer;
}
