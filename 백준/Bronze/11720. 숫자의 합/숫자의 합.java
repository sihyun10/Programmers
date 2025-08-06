import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

// charAt() : 문자열에서 i번째 문자를 꺼내고, - '0'을 통해 문자 ➔ 숫자로 변환
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 숫자의 개수
        String data = br.readLine();

        int result = 0;
        for (int i = 0; i < N; i++) {
            result += data.charAt(i) - '0';
        }
        
        System.out.println(result);
    }
}
