// DFS 깊이 우선 탐색을 활용
function solution(n, computers) {
    const visited = new Array(n).fill(false);
    let networkCount = 0;

    function dfs(node) {
        visited[node] = true;

        for (let neighbor = 0; neighbor < computers[node].length; neighbor++) {
            if (computers[node][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }

    // 모든 컴퓨터를 순회하며 네트워크의 개수 세기
    for (let computer = 0; computer < computers.length; computer++) {
        if (!visited[computer]) {
            dfs(computer);
            networkCount += 1;
        }
    }
    return networkCount;
}