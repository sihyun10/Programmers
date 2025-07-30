import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder result = new StringBuilder();

        int N = Integer.parseInt(br.readLine());
        Deque<Ballon> queue = new ArrayDeque<>();

        // 각 풍선 안에 적혀 있는 이동 값들
        String space = " ";
        String[] move_value = br.readLine().split(space);

        for (int i = 0; i < N; i++) {
            queue.addLast(new Ballon(i + 1, Integer.parseInt(move_value[i])));
        }

        while (!queue.isEmpty()) {
            Ballon current = queue.pollFirst(); // 풍선 터뜨림
            result.append(current.index).append(" ");

            if (queue.isEmpty()) break;

            int move = current.move;

            if (move > 0) {
                // 앞에서 뽑고 뒤로 넣기
                for (int i = 0; i < move - 1; i++) {
                    queue.addLast(queue.pollFirst());
                }
            } else {
                // 뒤에서 뽑아서 앞으로 넣기
                for (int i = 0; i < Math.abs(move); i++) {
                    queue.addFirst(queue.pollLast());
                }
            }
        }
        /* trim() : 마지막 문자가 공백일 경우 없애준다 */
        System.out.println(result.toString().trim());
    }

    static class Ballon {
        int index; // 풍선 번호
        int move; // 이동 값

        Ballon(int index, int move) {
            this.index = index;
            this.move = move;
        }
    }
}
