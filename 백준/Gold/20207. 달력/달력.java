import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
"달력의 총 면적을 구하는 문제"

일정이 있는 날(days[i] > 0)이면
width++
height = max(height, days[i])

일정이 없는 날(days[i] == 0)이면
면적 = width * height 계산
width = 0, height = 0으로 초기화
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); // 일정의 개수

        int[] days = new int[366]; // 1 ~ 365
        int minDay = 366;
        int maxDay = 0;

        // 일정의 개수만큼 시작 날짜 S, 종료 날짜 E가 주어짐
        for (int i = 0; i < N; i++) {
            String[] start_end_day = br.readLine().split(" ");
            int S = Integer.parseInt(start_end_day[0]); // 시작 날짜
            int E = Integer.parseInt(start_end_day[1]); // 종료 날짜

            markDays(days, S, E);

            // 최소 시작일, 최대 종료일 갱신
            minDay = Math.min(minDay, S);
            maxDay = Math.max(maxDay, E);
        }

        int result = calculateArea(days, minDay, maxDay);
        System.out.println(result);
    }

    /* 일정 표시 */
    private static void markDays(int[] days, int start, int end) {
        for (int d = start; d <= end; d++) {
            days[d] += 1;
        }
    }

    /* 면적 계산 */
    private static int calculateArea(int[] days, int minDay, int maxDay) {
        int width = 0;
        int height = 0;
        int area = 0;

        for (int i = minDay; i <= maxDay; i++) {
            if (days[i] > 0) {
                width += 1;
                height = Math.max(height, days[i]);
            } else {
                area += width * height;
                width = 0;
                height = 0;
            }
        }

        area += width * height; // 마지막 구간 처리
        return area;
    }
}
