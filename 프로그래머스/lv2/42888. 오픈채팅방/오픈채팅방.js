function solution(record) {
    const userInfo = {}; // 유저 아이디는 key로, 닉네임은 value로 저장
    const chatMessage = []; // 최종 채팅방 메시지 저장

    for (let i = 0; i < record.length; i++) {
        const [command, userId, nickname] = record[i].split(' ');
    
        if (command === "Enter") {
            userInfo[userId] = nickname; // 업데이트
            chatMessage.push(`${userId}님이 들어왔습니다.`);
        } else if (command === "Leave") {
            chatMessage.push(`${userId}님이 나갔습니다.`);
        } else if (command === "Change") {
            userInfo[userId] = nickname; // 업데이트
        }
    }

    // chatMessage에 있는 유저 아이디 -> 최신 닉네임 변경
    for (let i = 0; i < chatMessage.length; i++) {
        const userNickname = chatMessage[i].split("님이")[0];
        chatMessage[i] = chatMessage[i].replace(userNickname, userInfo[userNickname]);
    }
    return chatMessage;
}