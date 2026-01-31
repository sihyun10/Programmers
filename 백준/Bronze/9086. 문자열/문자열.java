import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int testCaseCount = Integer.parseInt(br.readLine());

        for (int i = 0; i < testCaseCount; i++) {
            String input = br.readLine();
            char firstWord = input.charAt(0);
            char endWord = input.charAt(input.length() - 1);
            System.out.println(String.valueOf(firstWord) + endWord);
        }     
    }
}
