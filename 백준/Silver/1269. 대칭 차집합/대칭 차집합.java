import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;

/*
두 집합 A와 B가 있을 때, (A-B) + (B-A) 합을 출력한다.
즉, 대칭 차집합의 원소의 개수를 출력하면 된다.

List 클래스의 removeAll() 메서드를 사용해 차집합을 구할 수 있다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String space = " ";
        String[] elements_num = br.readLine().split(space);
        int elements_A = Integer.parseInt(elements_num[0]);
        int elements_B = Integer.parseInt(elements_num[1]);

        String[] A = br.readLine().split(space);
        String[] B = br.readLine().split(space);

        Set<Integer> setA = new HashSet<>();
        for (int i = 0; i < elements_A; i++) {
            setA.add(Integer.valueOf(A[i]));
        }

        Set<Integer> setB = new HashSet<>();
        for (int i = 0; i < elements_B; i++) {
            setB.add(Integer.valueOf(B[i]));
        }

        // 차집합 계산 (setA - setB)
        Set<Integer> difference_A_B = new HashSet<>(setA);
        difference_A_B.removeAll(setB);

        // 차집합 계산 (setB - setA)
        Set<Integer> difference_B_A = new HashSet<>(setB);
        difference_B_A.removeAll(setA);

        int result = difference_A_B.size() + difference_B_A.size();
        System.out.println(result);
    }
}
