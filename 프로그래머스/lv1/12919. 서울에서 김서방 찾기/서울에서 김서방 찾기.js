// 배열 안에 "Kim" 은 오직 한번만 나타나고, 반드시 포함되어있기 때문에, indexOf() 메서드를 통해 "Kim"에 해당하는 인덱스를 추출한다.

function solution(seoul) {
    return "김서방은 " + seoul.indexOf("Kim") + "에 있다"
}