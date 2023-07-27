function solution(emergency) {
    const sort = [...emergency].sort((a, b) => b - a);
    return emergency.map((value) => sort.indexOf(value) + 1);
}