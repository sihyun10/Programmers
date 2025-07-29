import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Objects;

/*
* 입력 개수 N을 입력받는다.
* N번 반복하면서 각 괄호 문자열을 반복해서 처리한다.
* 여는 괄호 ( -> 스택에 추가
* 닫는 괄호 ) -> 스택이 비어있으면 isValid = false 설정하고 중단, 스택이 비어있지않으면 스택에서 하나 꺼냄
* 문자열 순회를 다 끝낸 후, 스택이 비어있지않으면 "여는 괄호가 남아있는것"이기에 isValid = false
* isValid 값에 따라, true이면 "YES" 출력, false이면 "NO" 출력
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());

        for (int i = 0; i < N; i++) {
            Deque<String> queue = new ArrayDeque<>();
            boolean isValid = true; // 올바른 VPS인지 판단함

            String parenthesis = br.readLine();
            String[] parts = parenthesis.split("");

            for (String part : parts) {
                if (Objects.equals(part, "(")) {
                    queue.addFirst(part);
                } else if (Objects.equals(part, ")")) {
                    if (queue.isEmpty()) {
                        isValid = false;
                        break;
                    }
                    queue.pollFirst();
                }
            }

            if (!queue.isEmpty()) {
                isValid = false;
            }

            if (isValid) {
                sb.append("YES").append("\n");
            } else {
                sb.append("NO").append("\n");
            }
        }

        System.out.print(sb);
    }
}
