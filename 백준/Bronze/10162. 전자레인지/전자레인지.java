import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
"그리디 알고리즘" - 큰 단위의 버튼부터 최대한 사용한다.

A = 300초 (5분)
B = 60초 (1분)
C = 10초
➔ T초를 만들기 위한 A, B, C 버튼 누른 횟수의 최소 조합을 찾아야한다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int T = Integer.parseInt(br.readLine());

        int[] buttons = {300, 60, 10};
        int[] counts = new int[3];

        // 모든 버튼은 10초의 배수이기에, 10으로 나누어 떨어지지 않는다면 -1로 출력되게끔 해야한다.
        if (T % 10 != 0) {
            System.out.println(-1);
            return;
        }

        for (int i = 0; i < buttons.length; i++) {
            counts[i] = T / buttons[i];
            T %= buttons[i];
        }

        System.out.println(counts[0] + " " + counts[1] + " " + counts[2]);
    }
}
