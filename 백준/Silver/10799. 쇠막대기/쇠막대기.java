import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Objects;

/*
'(' : 막대기 시작 -> push
')' (2가지 경우)
- 앞 문자가 '(' 이면 -> 레이저
  - 스택에서 pop 하고, 현재 스택 크기만큼 조각 추가
- 앞 문자가 ')' 이면 -> 막대기 끝
  - 스택에서 pop 하고, +1만 해준다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int cut_peace_count = 0; // 잘려진 조각의 총 개수

        String input = br.readLine();
        Deque<String> stack = new ArrayDeque<>();

        String[] data = input.split("");
        
        for (int i = 0; i < data.length; i++) {
            String current = data[i];

            if (Objects.equals(current, "(")) {
                stack.addFirst(current);
            } else { // 실제 잘라진 조각 수를 세는 로직
                stack.pollFirst(); // 짝 맞춰서 하나 pop

                if (Objects.equals(data[i - 1], "(")) {
                    // 레이저 -> 현재 열린 막대기 수만큼 조각 생성
                    cut_peace_count += stack.size();
                } else {
                    // 막대기 끝 -> 조각 하나만 추가
                    cut_peace_count += 1;
                }
            }
        }

        System.out.println(cut_peace_count);
    }
}
