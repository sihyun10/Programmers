import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서
K가 하나라도 포함되는 모든 시각을 세는 프로그램을 작성하라.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String space = " ";
        String[] parts = br.readLine().split(space);
        int N = Integer.parseInt(parts[0]);
        String K = parts[1];

        int count = 0;
        for (int i = 0; i <= N; i++) {
            for (int j = 0; j < 60; j++) {
                for (int k = 0; k < 60; k++) {
                    // 시간, 분, 초를 2자리로 포맷팅 <- 디지털 시계 기준으로 시각을 셈
                    String time = String.format("%02d:%02d:%02d", i, j, k);
                    if (time.contains(K)) {
                        count++;
                    }
                }
            }
        }

        System.out.println(count);
    }
}
