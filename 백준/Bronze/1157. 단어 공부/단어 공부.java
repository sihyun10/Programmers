import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine().toUpperCase();

        String[] arr = input.split("");

        Map<String, Integer> map = new HashMap<>();

        for (String s : arr) {
            if (map.containsKey(s)) {
                map.put(s, map.get(s) + 1);
            } else {
                map.put(s, 1);
            }
        }

        int max = 0;
        String result = "?";

        for (String key : map.keySet()) {
            int value = map.get(key);

            if (value > max) {
                max = value;
                result = key;
            } else if (value == max) {
                result = "?";
            }
        }

        System.out.println(result);
    }
}
