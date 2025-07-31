import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Deque;

/*
Priority(중요도) 관리 : 현재 문서보다 더 높은 중요도가 있는지 판단해야하므로...

Queue<Document>에는 문서들이 들어가고,
List<Integer> 같은 자료구조로 현재 중요도들을 확인할 수 있다.
한 문서를 출력할 때마다 count++해서, 우리가 찾는 문서가 언제 출력되는지 추적하면 된다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder result = new StringBuilder(); // 각 문서들이 몇 번째로 인쇄되는지

        int N = Integer.parseInt(br.readLine());

        // 테스트 케이스 반복
        for (int i = 0; i < N; i++) {
            Deque<Document> queue = new ArrayDeque<>();

            String[] test_case = br.readLine().split(" ");
            int docCount = Integer.parseInt(test_case[0]); // 문서 개수
            int targetIndex = Integer.parseInt(test_case[1]); // 궁금한 문서 위치 (인덱스)
            String[] priorities = br.readLine().split(" "); // 중요도들

            // 문서들 큐에 넣기
            for (int j = 0; j < docCount; j++) {
                int priority = Integer.parseInt(priorities[j]);
                queue.addLast(new Document(j, priority));
            }

            int count = 0;
            while (!queue.isEmpty()) {
                Document current = queue.pollFirst();

                if (hasHigherPriority(current, queue)) {
                    queue.addLast(current); // 뒤로 보낸다.
                    continue;
                }

                count++;

                if (current.index == targetIndex) {
                    result.append(count).append("\n");
                    break;
                }
            }
        }

        System.out.print(result);
    }

    private static boolean hasHigherPriority(Document current, Deque<Document> queue) {
        for (Document doc : queue) {
            // 현재 문서의 중요도보다 더 높은 중요도를 가지면 true 반환
            if (doc.priority > current.priority) {
                return true;
            }
        }
        return false;
    }

    // Document 클래스
    // 원래 몇번째 문서였는지를 추적해야하기에 index를 저장해야함
    static class Document {
        int index; // 원래 위치
        int priority; // 중요도

        Document(int index, int priority) {
            this.index = index;
            this.priority = priority;
        }
    }
}
