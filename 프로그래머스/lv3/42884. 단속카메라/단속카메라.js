function solution(routes) {
    let cameraCount = 1;
  
    // 진입 시간 기준으로 정렬
    routes.sort((a, b) => a[0] - b[0]);
  
    let currentOut = routes[0][1];
  
    for (let i = 1; i < routes.length; i++) {
        const [entry, exit] = routes[i];
    
        if (currentOut < entry) {
            cameraCount += 1;
            currentOut = exit;
        }
      
        if (currentOut > exit) {
            currentOut = exit;
        }
    }
    return cameraCount;
}