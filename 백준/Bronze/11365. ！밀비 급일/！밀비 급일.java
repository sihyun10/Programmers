import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
StringBuilder reverse 함수 사용
문자열을 StringBuilder 객체로 변환해서 reverse 메소드를 사용해 문자열을 뒤집어준다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            String code = br.readLine();
            if (code.equals("END")) {
                break;
            }

            StringBuilder sb = new StringBuilder(code);
            System.out.println(sb.reverse());
        }
    }
}
