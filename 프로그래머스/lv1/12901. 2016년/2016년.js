function solution(a, b) {
    const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 총 일수
    let totalDays = 0;
    for (let i = 0; i < a - 1; i++) {
        totalDays += daysOfMonth[i];
    }
    totalDays += b - 1;

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayIndex = (totalDays + 5) % 7; // 2016년 1월 1일은 금요일이기 때문에 5를 더함.

    return daysOfWeek[dayIndex];
}