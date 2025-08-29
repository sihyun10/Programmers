import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

/*
항구에는 크레인이 N대 있고, 1분에 박스를 하나씩 배에 실을 수 있다.
(모든 크레인은 동시에 움직인다 -> "각 크레인이 들 수 있는 박스를 하나씩 옮길 수 있다"는 의미)

- 무게가 가장 큰 박스는 가장 센 크레인이 들어야한다.
 만약, 가장 무거운 박스를 어떤 크레인도 들 수 없다면 '-1' 출력

따라서, 크레인 내림차순 정렬 (무거운거 들 수 있는 순서로), 박스도 내림차순 정렬 (무거운 박스부터)
*/

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 크레인 수
        int[] cranes = readArray(br.readLine(), N);

        int M = Integer.parseInt(br.readLine()); // 박스 수
        int[] boxes = readArray(br.readLine(), M);

        sortDescending(cranes);
        sortDescending(boxes);

        int result = moveBoxes(cranes, boxes);
        System.out.println(result);
    }

    /* 문자열 한 줄을 공백 기준으로 나눠 int 배열로 변환 */
    private static int[] readArray(String line, int size) {
        int[] arr = new int[size];

        String space = " ";
        String[] split = line.split(space);
        for (int i = 0; i < size; i++) {
            arr[i] = Integer.parseInt(split[i]);
        }
        return arr;
    }

    /* 배열 - 내림차순 정렬 */
    private static void sortDescending(int[] arr) {
        Arrays.sort(arr); // 오름차순 정렬
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }

    private static int moveBoxes(int[] cranes, int[] boxes) {
        if (boxes[0] > cranes[0]) {
            return -1;
        }

        int M = boxes.length;
        boolean[] visited = new boolean[M];
        int remain = M; // 남은 박스 수
        int minutes = 0; // 걸린 시간

        while (remain > 0) {
            minutes += 1;
            int boxIndex = 0; // 현재 탐색할 박스 인덱스

            for (int crane : cranes) {
                while (boxIndex < M) {
                    /* 아직 안 옮긴 박스이면서, 들 수 있는 경우 -> 옮기기 */
                    if (!visited[boxIndex] && crane >= boxes[boxIndex]) {
                        visited[boxIndex] = true; // 옮긴 상태
                        remain -= 1;
                        boxIndex += 1;
                        break;
                    }
                    boxIndex += 1;
                }
            }
        }

        return minutes;
    }
}
