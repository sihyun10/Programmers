import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.Comparator;
import java.util.stream.Stream;

/*
N개의 센서가 적어도 하나의 집중국과는 통신이 가능해야함
각 집중국의 수신 가능 영역의 길이의 합을 최소화해야한다.

센서의 개수 : N, 집중국의 개수 : K, N개의 센서의 좌표가 한개의 정수로 N개 주어짐
최대 K개의 집중국의 수신 가능 영역의 길이의 합의 최솟값을 출력한다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine()); // 센서의 개수
        int K = Integer.parseInt(br.readLine()); // 집중국의 개수

        // (예외 처리) 센서의 개수 <= 집중국의 개수 : 0
        if (N <= K) {
            System.out.println(0);
            return;
        }

        String space = " ";
        String[] split_coordinate = br.readLine().split(space); // N개의 센서 좌표
        Arrays.sort(split_coordinate, Comparator.comparingInt(Integer::parseInt));

        int[] distance = new int[N - 1];
        for (int i = 0; i < N-1; i++) {
            distance[i] = Integer.parseInt(split_coordinate[i+1]) - Integer.parseInt(split_coordinate[i]);
        }

        Arrays.sort(distance);

        int result = 0;
        // (N-1) - (K-1) = N - K 개의 거리 더하면 됨
        for (int i = 0; i < N - K; i++) {
            result += distance[i];
        }

        System.out.println(result);
    }

}
