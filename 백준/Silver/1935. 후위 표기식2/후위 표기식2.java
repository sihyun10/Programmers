import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 피연산자 개수
        String formula = br.readLine(); // 후위 표기식

        Map<Character, Double> valueMap = new HashMap<>();

        for (int i = 0; i < N; i++) {
            double value = Double.parseDouble(br.readLine()); // 숫자 입력받기
            char operand = (char) ('A' + i); // A부터 차례대로 대응
            valueMap.put(operand, value);
        }

        // 후위 표기식 문자열에서 "연산자"인지? "피연산자(알파벳)"인지? 구분
        // A ~ Z : 피연산자 (숫자와 매핑됨), +,-,*,/ : 연산자
        String[] split_formula = formula.split("");
        Deque<Double> queue = new ArrayDeque<>();

        for (String s : split_formula) {
            if (Objects.equals(s, "+") || Objects.equals(s, "-") || Objects.equals(s, "*") || Objects.equals(s, "/")) {
                // 연산자일 경우, 스택에서 두개의 값을 꺼내서 계산
                Double b = queue.pollLast();
                Double a = queue.pollLast();

                switch (s) {
                    case "+":
                        queue.addLast(a + b);
                        break;
                    case "-":
                        queue.addLast(a - b);
                        break;
                    case "*":
                        queue.addLast(a * b);
                        break;
                    case "/":
                        queue.addLast(a / b);
                        break;
                }
            } else {
                // 피연산자일 경우, 스택에 해당하는 Integer 값을 스택(queue)에 넣음
                char key = s.charAt(0); // String -> char
                Double value = valueMap.get(key);
                queue.addLast(value);
            }
        }

        System.out.printf("%.2f", queue.pollLast());
    }
}
