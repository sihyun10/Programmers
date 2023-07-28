function solution(d, budget) {
    const sum = d.reduce((prev, curr) => prev + curr);

    if (sum <= budget) {
        return d.length;
    }

    const sort = d.sort((a, b) => a - b);
    let remainingBudget = budget;
    let supportedDepartments = 0;

    for (let i = 0; i < sort.length; i++) {
        if (remainingBudget >= sort[i]) {
            remainingBudget -= sort[i];
            supportedDepartments++;
        } else {
            break;
        }
    }

    return supportedDepartments;
}
