import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Objects;

/*
알파벳 대/소문자와 숫자로 이루어진 단어가 주어졌을 때,
모든 히든 넘버의 합을 구하라.

- 연속된 숫자는 한 히든 넘버 -> 버퍼를 사용해 숫자를 계속 이어붙여야한다.
- 두 히든 넘버 사이에는 글자가 적어도 한 개 있음
- 히든 넘버는 6자리를 넘지 않음

~ 구현 과정 ~
1. 문자와 숫자를 구분하며 입력을 순차적으로 읽음
2. 숫자를 만나면 이어붙인다.
3. 문자를 만나면, 버퍼에 숫자가 있으면 합산하고 초기화
4. 끝까지 다 읽은 뒤, 버퍼에 숫자가 남아있으면 마지막으로 합산

"숫자가 없을 수도 있다" -> 버퍼가 비어있으면 0
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder numBuffer = new StringBuilder();

        int n = Integer.parseInt(br.readLine()); // 단어의 길이
        String word = br.readLine(); // 문자열 받기

        long sum = 0;
        for (int i = 0; i < n; i++) {
            char ch = word.charAt(i); // 한글자씩 처리

            /* Character.isDigit(Char ch) : 숫자 여부 판별 메서드 */
            // '0' ~ '9' 사이인지 검사해 true/false를 반환한다.
            if (Character.isDigit(ch)) {
                numBuffer.append(ch);
                
                if (numBuffer.length() == 6) {
                    sum += flushBuffer(numBuffer);
                }
            } else {
                sum += flushBuffer(numBuffer);
            }
        }

        sum += flushBuffer(numBuffer);

        System.out.println(sum);
    }

    /* 버퍼에 모아둔 숫자를 정수로 변환해서 합산 가능한 값으로 돌려주고, 버퍼를 비워준다 */
    private static long flushBuffer(StringBuilder numBuffer) {
        if (numBuffer.length() == 0) return 0;
        long value = Long.parseLong(numBuffer.toString());
        numBuffer.setLength(0);

        return value;
    }
}
