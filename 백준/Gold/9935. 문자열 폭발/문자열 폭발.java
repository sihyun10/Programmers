import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

/*
"특정 패턴을 효율적으로 제거하는 문제"이다.

1.문자열을 왼쪽부터 한 글자씩 순회
2.글자를 스택에 push
3.push할 때마다 스택의 마지막 부분이 폭발 문자열과 일치하는지 확인
  3-1.일치하면 폭발 문자열 길이만큼 pop
4.끝까지 순회하면 스택에 남은 글자가 결과 문자열이다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String input = br.readLine();
        String bomb = br.readLine(); // 폭발 문자열

        int n = input.length();
        int explosion_length = bomb.length();

        Stack<Character> data_stack = new Stack<>();

        for (int i = 0; i < n; i++) {
            data_stack.push(input.charAt(i));
            if (data_stack.size() >= explosion_length) {
                boolean match = true;
                for (int j = 0; j < explosion_length; j++) {
                    if (data_stack.get(data_stack.size() - explosion_length + j) != bomb.charAt(j)) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    for (int j = 0; j < explosion_length; j++) {
                        data_stack.pop();
                    }
                }
            }
        }

        if (data_stack.isEmpty()) {
            System.out.println("FRULA");
        } else {
            StringBuilder sb = new StringBuilder();
            for (Character c : data_stack) {
                sb.append(c);
            }
            System.out.println(sb);
        }
    }
}
