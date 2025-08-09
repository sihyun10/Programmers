import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
입력된 시간을 시, 분, 초로 나누어 모두 초 단위로 변환한다.
totalSeconds = hours * 3600 + minutes * 60 + seconds

투척 시간 <= 현재 시간 : 다음 날로 넘어가야함
투척 시간 - 현재 시간 <= 0, 24시간 (=24 * 3600 초 =86400초) 더해주어야한다

계산된 차이를 다시 hh:mm:ss 형식으로 변환한다.
String.format("%02d:%02d:%02d")로 포맷팅한다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] current_time = br.readLine().split(":");
        String[] target_time = br.readLine().split(":");

        int currentSecond = toSeconds(current_time);
        int targetSecond = toSeconds(target_time);

        int diff = targetSecond - currentSecond;
        if (diff <= 0) {
            diff += 86400;
        }

        int hour = diff / 3600;
        int minute = (diff % 3600) / 60;
        int second = diff % 60;

        System.out.printf("%02d:%02d:%02d", hour, minute, second);
    }

    private static int toSeconds(String[] time) {
        int hours = Integer.parseInt(time[0]);
        int minutes = Integer.parseInt(time[1]);
        int seconds = Integer.parseInt(time[2]);

        int totalSeconds = hours * 3600 + minutes * 60 + seconds;
        return totalSeconds;
    }
}
