import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

/*
작은 점프 : 현재 돌에서 +1칸 -> 에너지 A[i] 소모
큰 점프 : 현재 돌에서 +2칸 -> 에너지 B[i] 소모
아주 큰 점프 (한번만 쓸 수 있음) : 현재 돌에서 +3칸 -> 에너지 K 소모

N번 돌에 도착할 때 드는 최소 에너지를 구하는 문제

"아주 큰 점프를 쓰지 않는 경우 (작은 점프, 큰 점프만 있는 경우)"
- 작은 점프 : (i-1)번 돌에서 +1 -> dp[i-1] + A[i-1]
- 큰 점프 : (i-2)번 돌에서 +2 -> dp[i-2] + B[i-2]
*/
public class Main {
    static final int INF = 1_000_000_000;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); // 돌의 개수

        int[] A = new int[N]; // 작은 점프를 하기 위해 필요한 에너지
        int[] B = new int[N]; // 큰 점프를 하기 위해 필요한 에너지

        for (int i = 1; i <= N-1; i++) {
            String[] split = br.readLine().split(" ");
            A[i] = Integer.parseInt(split[0]);
            B[i] = Integer.parseInt(split[1]);
        }

        int K = Integer.parseInt(br.readLine()); // 아주 큰 점프를 하기 위해 필요한 에너지

        int minEnergy = solve(N, A, B, K);
        System.out.println(minEnergy);
    }

    private static int solve(int N, int[] A, int[] B, int K) {
        /* 1. 작은, 큰 점프만 고려 */
        int[] dp = calculateWithoutBigJump(N, A, B);

        int minEnergy = dp[N];

        /* 2. 아주 큰 점프 고려 */
        for (int i = 1; i <= N - 3; i++) {
            /* i번 돌에 도달 불가능한 경우 스킵 */
            if (dp[i] == INF) {
                continue;
            }

            int[] dp2 = new int[N + 1];
            Arrays.fill(dp2, INF);

            // i번 돌에서 "아주 큰 점프" 하기
            dp2[i + 3] = dp[i] + K;

            // i+3번 돌 이후는 다시 "작은 or 큰 점프"로만 이동해야함
            for (int j = i + 4; j <= N; j++) {
                dp2[j] = Math.min(dp2[j - 1] + A[j - 1], dp2[j - 2] + B[j - 2]);
            }

            minEnergy = Math.min(minEnergy, dp2[N]);
        }

        return minEnergy;
    }

    /* 작은 점프, 큰 점프만 있는 경우 */
    private static int[] calculateWithoutBigJump(int N, int[] A, int[] B) {
        int[] dp = new int[N + 1];
        Arrays.fill(dp, INF);
        dp[1] = 0; // 시작점

        // 돌 1 -> 돌 2 (작은 점프 1번)
        if (N >= 2) {
            dp[2] = dp[1] + A[1];
        }

        // 돌 1 -> 돌 2 -> 돌 3 (작은 점프 2번)
        // 돌 1 -> 돌 3 (큰 점프 1번)
        if (N >= 3) {
            dp[3] = Math.min(dp[2] + A[2], dp[1] + B[1]);
        }

        for (int i = 4; i <= N; i++) {
            dp[i] = Math.min(dp[i - 1] + A[i - 1], dp[i - 2] + B[i - 2]);
        }

        return dp;
    }
}
