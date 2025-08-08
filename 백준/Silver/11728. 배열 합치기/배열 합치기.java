import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;

public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        String space = " ";
        String[] split_array = br.readLine().split(space);
        int N = Integer.parseInt(split_array[0]); // 배열 A의 크기 : N
        int M = Integer.parseInt(split_array[1]); // 배열 B의 크기 : M

        ArrayList<Integer> A_array = new ArrayList<>();
        String[] split_A_array = br.readLine().split(space);
        for (String s : split_A_array) {
            A_array.add(Integer.valueOf(s));
        }

        ArrayList<Integer> B_array = new ArrayList<>();
        String[] split_B_array = br.readLine().split(space);
        for (String s : split_B_array) {
            B_array.add(Integer.valueOf(s));
        }

        // A_array와 B_array 합치기
        A_array.addAll(B_array);

        Collections.sort(A_array);
        for (int num : A_array) {
            sb.append(num).append(" ");
        }

        System.out.print(sb);
    }
}
