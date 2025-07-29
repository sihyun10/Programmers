import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

/*
* 1 ~ N 번호를 리스트에 넣어둔다.
* 리스트에서 K 번째 사람을 제거하고 결과에 추가한다.
* 제거하고 난 뒤 그 다음부터 다시 세기 시작한다.
* 리스트가 빌 때까지 반복
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String input = br.readLine();

        String[] parts = input.split(" ");
        int N = Integer.parseInt(parts[0]);
        int K = Integer.parseInt(parts[1]);

        List<Integer> people = new ArrayList<>();
        for (int i = 1; i <= N; i++) {
            people.add(i);
        }

        List<Integer> result = new ArrayList<>();

        int idx = 0;
        while (!people.isEmpty()) {
            idx = (idx + K - 1) % people.size(); // K 번째 인덱스
            result.add(people.remove(idx));
        }

        // 출력 결과
        sb.append("<");
        for (int i = 0; i < result.size(); i++) {
            sb.append(result.get(i));
            if (i != result.size() -1) {
                sb.append(", ");
            }
        }
        sb.append(">");
        System.out.print(sb);
    }
}
