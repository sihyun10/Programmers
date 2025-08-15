import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

/*
상근이가 가지고 있는 카드 숫자들이 주어지고,
그 다음줄에 다른 숫자들이 주어져서 각각 상근이가 가지고 있는지 확인해야함
각 숫자에 대해 가지고 있으면 1, 없으면 0을 출력

"이진 탐색 방식"
- 먼저 전체 카드 숫자 배열을 정렬
- 찾고 싶은 숫자를 배열의 '가운데 숫자'랑 비교
  - 같으면 성공!
  - 찾는 숫자가 더 작으면 -> 왼쪽 절반만 보게끔
  - 찾는 숫자가 더 크면 -> 오른쪽 절반만 보게끔
- 이와같이 절반씩 버리면서 찾아가는 원리이다.

1. 입력으로 받은 카드 배열을 정렬
2. 확인해야 할 숫자마다 이진 탐색 실행
  - 있으면 1
  - 없으면 0
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        int N = Integer.parseInt(br.readLine()); // 상근이가 가지고 있는 숫자 카드의 개수
        String space = " ";
        String[] split_cards = br.readLine().split(space);
        int[] cards = toIntArray(split_cards);

        Arrays.sort(cards);

        int M = Integer.parseInt(br.readLine());
        String[] check_cards = br.readLine().split(space);
        int[] check = toIntArray(check_cards);

        for (int i = 0; i < M; i++) {
            if (binarySearch(cards, check[i])) {
                sb.append("1").append(" ");
            } else {
                sb.append("0").append(" ");
            }
        }

        // 마지막 공백 제거 후 출력
        System.out.println(sb.toString().trim());
    }

    private static boolean binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            if (arr[mid] == target) {
                return true;
            }
            if (target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return false;
    }

    /* 문자열 배열을 int 배열로 변환하여 return */
    private static int[] toIntArray(String[] arr) {
        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            result[i] = Integer.parseInt(arr[i]);
        }
        return result;
    }
}
