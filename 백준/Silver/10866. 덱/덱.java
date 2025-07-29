import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        ArrayDeque<Integer> deque = new ArrayDeque<>();

        for (int i = 0; i < N; i++) {
            String input = br.readLine();

            String space = " ";
            String[] parts = input.split(space);
            String command = parts[0]; // 명령은 총 8가지

            switch (command) {
                case "push_front":
                    int front_x = Integer.parseInt(parts[1]);
                    deque.addFirst(front_x);
                    break;
                case "push_back":
                    int back_x = Integer.parseInt(parts[1]);
                    deque.addLast(back_x);
                    break;
                case "pop_front":
                    if (appendIfEmpty(deque, sb)) break;
                    sb.append(deque.pollFirst()).append("\n");
                    break;
                case "pop_back":
                    if (appendIfEmpty(deque, sb)) break;
                    sb.append(deque.pollLast()).append("\n");
                    break;
                case "size":
                    sb.append(deque.size()).append("\n");
                    break;
                case "empty":
                    if (deque.isEmpty()) {
                        sb.append(1).append("\n");
                    } else {
                        sb.append(0).append("\n");
                    }
                    break;
                case "front":
                    if (appendIfEmpty(deque, sb)) break;
                    sb.append(deque.getFirst()).append("\n");
                    break;
                case "back":
                    if (appendIfEmpty(deque, sb)) break;
                    sb.append(deque.getLast()).append("\n");
                    break;
            }
        }

        System.out.print(sb);
    }

    private static boolean appendIfEmpty(Deque<Integer> queue, StringBuilder sb) {
        if (queue.isEmpty()) {
            sb.append(-1).append("\n");
            return true;
        }
        return false;
    }
}
