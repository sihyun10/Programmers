function solution(operations) {
    const queue = [];

    for (let i = 0; i < operations.length; i++) {
        const [command, number] = operations[i].split(' ');

        if (command === 'I') {
            queue.push(parseInt(number));
        } else if (command === 'D' && number === '1') {
            if (queue.length > 0) {
                const maxValueIndex = queue.indexOf(Math.max(...queue));
                queue.splice(maxValueIndex, 1);
            }
        } else if (command === 'D' && number === '-1') {
            if (queue.length > 0) {
                const minValueIndex = queue.indexOf(Math.min(...queue));
                queue.splice(minValueIndex, 1);
            }
        }
    }

    if (queue.length === 0) {
        return [0, 0];
    } else {
        return [Math.max(...queue), Math.min(...queue)];
    }
}
