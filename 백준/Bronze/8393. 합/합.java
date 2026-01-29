import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String line = br.readLine();
        int end = Integer.parseInt(line);

        int sum = 0;
        for (int i = 1; i <= end; i++) {
            sum += i;
        }

        System.out.println(sum);
    }
}
