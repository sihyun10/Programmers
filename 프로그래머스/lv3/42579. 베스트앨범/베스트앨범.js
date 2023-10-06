function solution(genres, plays) {
    const genrePlayCounts = {}; // 장르별로 재생 횟수를 누적
    const songInfoList = []; // 곡 정보 저장 (고유 번호, 장르, 재생횟수)

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const playCount = plays[i];
        genrePlayCounts[genre] = (genrePlayCounts[genre] || 0) + playCount;
        songInfoList.push({ index: i, genre, playCount });
    }
    
    const sortedGenre = Object.keys(genrePlayCounts).sort((a, b) => genrePlayCounts[b] - genrePlayCounts[a]);
    
    const answer = []; // 결과 배열

    for (const genre of sortedGenre) {
        const genreSongs = songInfoList.filter(song => song.genre === genre);
        genreSongs.sort((a, b) => b.playCount - a.playCount);
        for (let i = 0; i < Math.min(2, genreSongs.length); i++) {
            answer.push(genreSongs[i].index);
        }
    }
    
    return answer;
}