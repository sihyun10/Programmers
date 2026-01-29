import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String line = br.readLine();
        String space = " ";
        String[] split_input = line.split(space);
        int N = Integer.parseInt(split_input[0]);
        int X = Integer.parseInt(split_input[1]);

        String[] A = br.readLine().split(space);
        Integer[] arr = new Integer[N];

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(A[i]);

            if (arr[i] < X) {
                result.add(arr[i]);
            }
        }

        for (Integer i : result) {
            System.out.print(i);
            System.out.print(" ");
        }
    }
}
