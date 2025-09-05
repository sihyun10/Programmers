import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
합이 음수가 되면 이어갈 필요 없다 -> 끊고 새로 시작
최댓값은 계속 갱신해야함!! (음수도 최댓값이 될 수 있음)
*/
public class Main {

    public static void main(String[] args) throws IOException {
        int[] progression = readInput();
        System.out.println(findMaxSum(progression));
    }

    private static int[] readInput() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        String[] split = br.readLine().split(" ");

        /* n개의 정수로 이루어진 수열 */
        int[] progression = new int[n];
        for (int i = 0; i < n; i++) {
            progression[i] = Integer.parseInt(split[i]);
        }

        return progression;
    }

    private static int findMaxSum(int[] progression) {
        int currentSum = progression[0];
        int maxSum = progression[0];

        for (int i = 1; i < progression.length; i++) {
            currentSum = Math.max(progression[i], currentSum + progression[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}
