function solution(fees, records) {
    const parkedCars = new Map(); // 주차중인 차량
    const totalParkingTime = new Map(); // 차량별 주차시간

    for (const record of records) {
        const [time, number, status] = record.split(' ');
        const [hour, minute] = time.split(':');
        const currentTime = (Number(hour) * 60) + Number(minute);

        if (status === 'IN') {
            parkedCars.set(number, currentTime); // 차량번호와 현재시간 저장
        } else if (status === 'OUT') {
            if (!totalParkingTime.has(number)) {
                totalParkingTime.set(number, 0);
            }

            const parkedIn = parkedCars.get(number);
            const parkedTime = currentTime - parkedIn; // 주차해둔 시간 (입차 ~ 출차)
            parkedCars.delete(number);
            totalParkingTime.set(number, totalParkingTime.get(number) + parkedTime);
        }
    }
    
    // 차량이 입차된 후에 출차된 내역이 없을때 (=> 23:59에 출차된것으로 간주함)
    for (const [number, parkedIn] of parkedCars) {
        if (!totalParkingTime.has(number)) {
            totalParkingTime.set(number, 0);
        }
        // 23:59를 분으로 바꾸면 1439분
        const parkedTime = 1439 - parkedIn;
        totalParkingTime.set(number, totalParkingTime.get(number) + parkedTime);
    }
    
    // 차량 번호가 작은 자동차부터 정렬
    const sortedSmallCarNumbers = [...totalParkingTime.keys()].sort((a, b) => a - b);
    
    // 주차요금 계산하는 함수
    // fees[0] : 기본시간(분), fees[1] : 기본요금(원), fees[2] : 단위시간(분), fees[3] : 단위요금(원)
    const calculateParkingFee = (totaltime) => {
        if (totaltime <= fees[0]) {
            return fees[1];
        } else {
            return fees[1] + (Math.ceil((totaltime - fees[0]) / fees[2]) * fees[3]);
        }
    }

    // 각 차량 번호에 따라 최종 주차 요금 계산
    return sortedSmallCarNumbers.map(number => calculateParkingFee(totalParkingTime.get(number)));
}