import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

/*
각 종이 전체에서 몇 %를 차지하는지 구하는 프로그램

각 종의 이름을 사전순으로 정렬해서, 그 종이 차지하는 비율을 백분율로 소수점 4째자리까지 반올림해 출력한다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 각 나무 종 이름별로 개수를 카운팅한다.
        Map<String, Integer> map = new HashMap<>();
        String tree;
        int totalTreeCount = 0;

        while ((tree = br.readLine()) != null && !tree.isEmpty()) {
            map.put(tree, map.getOrDefault(tree, 0) + 1);
            totalTreeCount++;
        }

        // TreeMap은 SortedMap 인터페이스를 상속받는 클래스이다.
        // 문자열을 사전 순으로 비교하고 오름차순으로 정렬한다.
        Map<String, Integer> sortedMap = new TreeMap<>(map);
        
        for (String species : sortedMap.keySet()) {
            Integer count = map.get(species);
            double percentage = (count * 100.0) / totalTreeCount;
            System.out.printf("%s %.4f", species, percentage).println();
        }
    }
}
