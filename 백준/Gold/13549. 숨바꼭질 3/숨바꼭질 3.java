import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

/*
순간이동: x * 2
이동시간 = 0, "deque 앞쪽에 추가"
➔ 시간이 증가 X, 당장 처리해주어야함

걷기 : x -1 또는 x + 1
이동시간 = 1, "deque 뒤쪽에 추가"
➔ 시간이 증가함, 나중에 처리해주어도 됨
*/
public class Main {

    static final int MAX = 100000; // 문제 조건에 위치 범위가 0 ~ 100000

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] location = br.readLine().split(" ");

        int N = Integer.parseInt(location[0]); // 수빈이가 있는 위치
        int K = Integer.parseInt(location[1]); // 동생이 있는 위치

        /* dist[i] = i까지 가는 최소 시간 */
        int[] dist = new int[MAX + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[N] = 0;

        Deque<Integer> deque = new ArrayDeque<>();
        deque.offer(N);

        while (!deque.isEmpty()) {
            int cur = deque.poll();

            // 순간이동 (시간 : 0초)
            int teleport = cur * 2;
            if (teleport <= MAX && dist[teleport] > dist[cur]) {
                dist[teleport] = dist[cur];
                deque.offerFirst(teleport);
            }

            // 걷기 (시간 : 1초)
            for (int nx : new int[]{cur - 1, cur + 1}) {
                if (nx >= 0 && nx <= MAX && dist[nx] > dist[cur] + 1) {
                    dist[nx] = dist[cur] + 1;
                    deque.offerLast(nx);
                }
            }
        }

        System.out.println(dist[K]);
    }
}
