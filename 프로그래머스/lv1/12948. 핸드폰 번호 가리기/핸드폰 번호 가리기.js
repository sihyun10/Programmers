function solution(phone_number) {
    const secretNumber = Array(phone_number.length-4).fill('*').join('');
    const lastNumber = phone_number.slice(-4);
    return secretNumber + lastNumber;
}