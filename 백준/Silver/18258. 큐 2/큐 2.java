import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

/*
 * 입력 개수 N을 받는다.
 * N번 반복하면서 명령어를 읽는다.
 * 각 명령어를 switch문으로 구분 처리
 * 출력은 StringBuilder에 저장했다가 마지막에 한 번에 출력
 */
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        Deque<Integer> queue = new ArrayDeque<>();

        for (int i = 0; i < N; i++) {
            String input = br.readLine();
            String space = " ";
            String[] parts = input.split(space);
            String command = parts[0]; // 명령어 (6개)

            switch (command) {
                case "push":
                    int x = Integer.parseInt(parts[1]);
                    queue.addLast(x);
                    break;
                case "pop":
                    if (queue.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(queue.pollFirst()).append("\n");
                    }
                    break;
                case "size":
                    sb.append(queue.size()).append("\n");
                    break;
                case "empty":
                    if (queue.isEmpty()) {
                        sb.append(1).append("\n");
                    } else {
                        sb.append(0).append("\n");
                    }
                    break;
                case "front":
                    if (queue.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(queue.getFirst()).append("\n");
                    }
                    break;
                case "back":
                    if (queue.isEmpty()) {
                        sb.append(-1).append("\n");
                    } else {
                        sb.append(queue.getLast()).append("\n");
                    }
                    break;
            }
        }

        System.out.print(sb);
    }
}
