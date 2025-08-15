import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/*
이분탐색의 대상 : 블루레이 크기
최소 용량은 max(각 강의 길이) 이상이어야 함 -> 한 강의도 못 들어오면 안되기 때문이다.
최대 용량은 모든 강의 길이

"M개 블루레이에 모든 강의를 다 담을 수 있는 최소 용량 X를 찾는 게 목표"
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] lesson_blu_ray = br.readLine().split(" ");
        int N = Integer.parseInt(lesson_blu_ray[0]); // 강의의 수
        int M = Integer.parseInt(lesson_blu_ray[1]); // 블루레이 수

        String[] split_lesson = br.readLine().split(" ");
        int[] lessons = toIntArray(split_lesson);

        int low = 0;
        for (int time : lessons) {
            if (time > low) {
                low = time; // 최대 강의 시간(길이) (최소 용량)
            }
        }

        int high = 0;
        for (int time : lessons) {
            high += time; // 전체 강의 시간 합 (최대 용량)
        }

        int answer = high; // 최소 용량

        while (low <= high) {
            int mid = (low + high) / 2;
            int required = countBlueray(lessons, mid);

            if (required <= M) {
                answer = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        System.out.println(answer);
    }

    /* 문자열 배열을 int 배열로 변환하여 return */
    private static int[] toIntArray(String[] arr) {
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            result[i] = Integer.parseInt(arr[i]);
        }
        return result;
    }

    private static int countBlueray(int[] lessons, int capacity) {
        int count = 1;
        int current = 0;

        for (int time : lessons) {
            if (current + time > capacity) {
                count++;
                current = time;
            } else {
                current += time;
            }
        }
        return count;
    }
}
