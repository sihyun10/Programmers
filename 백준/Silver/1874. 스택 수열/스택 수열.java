import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;
import java.util.Objects;

/*
1부터 n까지 숫자를 오름차순으로 스택에 "push"하면서
주어진 수열을 만들어낼 수 있는지를 판단하고,
가능하다면 어떤 순서로 push(+), pop(-) 연산이 일어났는지 출력하면 된다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder result = new StringBuilder();

        List<Integer> sequence = new ArrayList<>(); // 수열

        int n = Integer.parseInt(br.readLine());
        for (int i = 0; i < n; i++) {
            int value = Integer.parseInt(br.readLine());
            sequence.add(value);
        }

        int num = 1; // 초기 변수 (현재 push할 숫자)
        Deque<Integer> stack = new ArrayDeque<>();

        for (Integer target : sequence) {
            while (num <= target) {
                stack.addFirst(num++);
                result.append("+\n");
            }

            if (Objects.equals(stack.peek(), target)) {
                stack.pollFirst();
                result.append("-\n");
            } else {
                System.out.println("NO");
                return;
            }
        }

        System.out.print(result);
    }
}
