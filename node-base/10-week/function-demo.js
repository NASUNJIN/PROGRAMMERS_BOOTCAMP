// 사용자 데이터를 처리하는 함수
function processUserData(users, callback) {
    // 사용자 데이터 배열을 순회하면서 각 사용자의 나이를 계산하는 중첩 함수
    function calculateAge(birthYear) {
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    }

    // 사용자 데이터 처리 결과를 저장할 배열
    const processedUsers = users.map(user => {
        const age = calculateAge(user.birthYear);
        return {
            ...user,
            age: age
        };
    });

    // 처리된 사용자 데이터를 콜백 함수로 전달하여 추가 처리
    return callback(processedUsers);
}

// 특정 조건을 만족하는 사용자를 필터링하는 함수 (예: 나이가 20 이상인 사용자)
function filterUsersByAge(users) {
    return users.filter(user => user.age >= 20);
}

// 예시 사용자 데이터
const users = [
    { name: 'sunjin', birthYear: 2001 },
    { name: 'hyojin', birthYear: 2004 },
    { name: 'youjin', birthYear: 2009 },
];

// 사용자 데이터를 처리하고 나이가 20 이상인 사용자만 필터링
const result = processUserData(users, filterUsersByAge);

console.log(result);
