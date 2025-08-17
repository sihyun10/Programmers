import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    static int N, K;
    static int[] words;
    static int answer = 0;
    static int baseMask;
    static List<Integer> candidates = new ArrayList<>();

    public static void main(String[] args) throws IOException {
        initInput();

        // K는 26보다 작거나 같은 자연수 또는 0 -> k < 5 이면 기본 글자도 못 배움 ("0 출력")
        if (K < 5) {
            System.out.println(0);
            return;
        }

        dfs(0, 0, baseMask);
        System.out.println(answer);
    }

    private static void initInput() throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] data = br.readLine().split(" ");
        N = Integer.parseInt(data[0]);
        K = Integer.parseInt(data[1]);

        words = new int[N];
        for (int i = 0; i < N; i++) {
            int mask = 0;
            String word = br.readLine();
            for (char c : word.toCharArray()) {
                mask |= (1 << (c - 'a'));
            }
            words[i] = mask;
        }

        baseMask = getBaseMask(); // a,n,t,i,c 비트 생성
        createCandidates(); // 후보 글자 리스트
    }

    // 비트마스크 변환
    private static int getBaseMask() {
        int mask = 0;
        mask |= 1 << ('a' - 'a');
        mask |= 1 << ('n' - 'a');
        mask |= 1 << ('t' - 'a');
        mask |= 1 << ('i' - 'a');
        mask |= 1 << ('c' - 'a');
        return mask;
    }

    private static void createCandidates() {
        for (char c = 'a'; c <= 'z'; c++) {
            if (c == 'a' || c == 'n' || c == 't' || c == 'i' || c == 'c') continue;
            candidates.add(c - 'a');
        }
    }

    static void dfs(int idx, int count, int mask) {
        if (count == (K - 5)) {
            int readable = countReadable(mask);
            answer = Math.max(answer, readable);
            return;
        }

        // 후보 글자 채우기
        for (int i = idx; i < candidates.size(); i++) {
            int bit = candidates.get(i);
            // 이미 mask에 포함된 bit 이면 다시 안 넣어도 됨
            if ((mask & (1<<bit)) != 0) continue;
            dfs(i + 1, count + 1, mask | (1 << bit));
        }
    }

    private static int countReadable(int mask) {
        int cnt = 0;
        for (int w : words) {
            if ((w & mask) == w) {
                cnt++;
            }
        }
        return cnt;
    }
}
