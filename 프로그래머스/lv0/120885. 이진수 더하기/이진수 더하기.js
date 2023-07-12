// parseInt() : 문자열을 특정 진수의 정수로 변환. cf) parseInt('변환시키고자하는 문자열', 해당 수의 진수)

function solution(bin1, bin2) {
    bin1 = Number(bin1);
    bin2 = Number(bin2);
    
    const number1 = parseInt(bin1, 2);
    const number2 = parseInt(bin2, 2);
    
    return (number1+number2).toString(2);
}