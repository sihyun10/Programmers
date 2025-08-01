import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;

/*
총 N개의 문자열로 이루어진 집합 S가 주어진다.
입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String space = " ";
        String[] parts = br.readLine().split(space);
        int string_count = Integer.parseInt(parts[0]);
        int setString_count = Integer.parseInt(parts[1]);

        HashSet<String> string_set = new HashSet<>();
        for (int i = 0; i < string_count; i++) {
            String data = br.readLine();
            string_set.add(data);
        }

        int include_count = 0;

        for (int i = 0; i < setString_count; i++) {
            String test_string = br.readLine();
            boolean contains = string_set.contains(test_string);
            if (contains) {
                include_count += 1;
            }
        }

        System.out.println(include_count);
    }
}
