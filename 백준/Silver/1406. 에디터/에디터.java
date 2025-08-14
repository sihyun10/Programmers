import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Objects;
import java.util.Stack;

/*
L(왼쪽으로 이동), D(오른쪽으로 이동), B(왼쪽 문자 삭제), P x(커서 왼쪽에 x문자 추가)

[스택 2개 생성]
- leftStack : 커서 왼쪽에 있는 문자들 저장
- rightStack : 커서 오른쪽에 있는 문자들 저장

커서를 왼쪽으로 옮기면 -> leftStack.pop() 해서 rightStack.push()
커서를 오른쪽으로 옮기면 -> rightStack.pop() 해서 leftStack.push()
문자를 삽입하면 -> leftStack.push(문자)
문자를 삭제하면 -> leftStack.pop()
마지막 출력 -> leftStack + rightStack(뒤집은)
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String initial_string = br.readLine(); // 초기 편집기에 입력되어 있는 문자열
        int N = Integer.parseInt(br.readLine()); // (입력될) 명령어 횟수

        // 스택 2개 생성
        Stack<Character> left_stack = new Stack<>();
        Stack<Character> right_stack = new Stack<>();

        // 초기 세팅
        for (char c : initial_string.toCharArray()) {
            left_stack.push(c);
        }

        for (int i = 0; i < N; i++) {
            String space = " ";
            String[] split_command = br.readLine().split(space);

            if (Objects.equals(split_command[0], "L")) {
                if (!left_stack.isEmpty()) {
                    Character pop_value = left_stack.pop();
                    right_stack.push(pop_value);
                }
            } else if (Objects.equals(split_command[0], "D")) {
                if (!right_stack.isEmpty()) {
                    Character pop_value = right_stack.pop();
                    left_stack.push(pop_value);
                }
            } else if (Objects.equals(split_command[0], "B")) {
                if (!left_stack.isEmpty()) {
                    left_stack.pop();
                }
            } else {
                char push_value = split_command[1].charAt(0);
                left_stack.push(push_value);
            }
        }

        // 최종 출력
        StringBuilder sb = new StringBuilder();
        for (Character c : left_stack) {
            sb.append(c);
        }

        while (!right_stack.isEmpty()) {
            sb.append(right_stack.pop());
        }

        System.out.println(sb);
    }
}
