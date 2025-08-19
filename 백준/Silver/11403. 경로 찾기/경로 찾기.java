import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

/*
- 플로이드 워셜
중간 노드 k를 하나씩 정해두고
i -> k로 갈 수 있고, k -> j로 갈 수 있다면 i -> j도 갈 수 있다.
*/
public class Main {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine()); // 정점의 개수

        int[][] matrix = readMatrix(br, N);

        floyd(matrix, N);
        printMatrix(matrix);
    }

    private static int[][] readMatrix(BufferedReader br, int N) throws IOException {
        int[][] matrix = new int[N][N];

        for (int i = 0; i < N; i++) {
            String[] split = br.readLine().split(" ");
            for (int j = 0; j < N; j++) {
                matrix[i][j] = Integer.parseInt(split[j]);
            }
        }

        return matrix;
    }

    private static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }

    private static void floyd(int[][] matrix, int N) {
        for (int k = 0; k < N; k++) {
            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    /*  i번째 줄의 i번째 숫자는 항상 0이다. */
                    if (matrix[i][j] == 1) continue;

                    if (matrix[i][k] == 1 && matrix[k][j] == 1) {
                        matrix[i][j] = 1;
                    }
                }
            }
        }
    }
}
