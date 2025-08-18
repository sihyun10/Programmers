import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
각 줄마다 k개의 숫자 배열이 존재한다.
이 숫자 배열에서 6개를 고르는 "모든 조합"을 출력해야한다.
조합을 구할때, '백트래킹' 기법을 사용한다!

- 주어진 숫자 k개 중에서 6개를 선택하는 모든 조합을 만들어야한다.
*/
public class Main {
    static int k; // k개의 숫자 배열
    static int[] arr; // 선택 가능한 숫자 목록 (입력 값)
    static int[] choose; // 선택한 숫자 6개 저장
    static int lotto_num = 6;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            String input = br.readLine();
            if (input.equals("0")) {
                break;
            }
            solveTestCase(input);
            System.out.println(); // 테스트케이스 사이에 빈 줄 출력하기 위해서
        }
    }

    private static void solveTestCase(String inputLine) {
        String[] split = inputLine.split(" ");
        k = Integer.parseInt(split[0]);

        arr = new int[k];
        choose = new int[lotto_num];

        for (int i = 0; i < k; i++) {
            arr[i] = Integer.parseInt(split[i + 1]);
        }

        dfs(0,0);
    }

    // start : 다음 선택할 숫자의 시작 index
    // depth : 현재까지 몇 개를 선택했는지 (0 ~ 6까지)
    private static void dfs(int start, int depth) {
        if (depth == 6) {
            // 6개 다 고르면 출력
            for (int i = 0; i < 6; i++) {
                System.out.print(choose[i] + " ");
            }
            System.out.println();
            return;
        }

        for (int i = start; i < k; i++) {
            choose[depth] = arr[i];
            dfs(i + 1, depth + 1); // 다음 숫자 선택
        }
    }
}
