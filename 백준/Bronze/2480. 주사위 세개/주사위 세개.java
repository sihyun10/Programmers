import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int num1 = Integer.parseInt(st.nextToken());
        int num2 = Integer.parseInt(st.nextToken());
        int num3 = Integer.parseInt(st.nextToken());

        int price;
        if (num1 == num2 && num2 == num3) {
            price = 10000 + (num1) * 1000;
        } else if (num1 == num2 || num1 == num3 || num2 == num3) {
            if (num1 == num2 || num1 == num3) {
                price = 1000 + (num1) * 100;
            } else {
                price = 1000 + (num2) * 100;
            }
        } else {
            if (num1 > num2 && num1 > num3) {
                price = num1 * 100;
            } else if (num2 > num1 && num2 > num3) {
                price = num2 * 100;
            } else {
                price = num3 * 100;
            }
        }

        System.out.println(price);
    }
}
