// 최소 필요 피로도 : 던전을 돌기 위한 값
// 소모 피로도 : 던전 탐험 후 소모되는 값
// dungeons = [[],[]] 2차 배열
// k = 현재 피로도
// output = 돌 수 있는 던전 수
function solution(k, dungeons) {
    // dungeons를 0~끝까지 반복
    dungeons.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1]; // 소모 피로도가 큰 순서로 정렬
        }
        return a[0] - b[0]; // 최소 필요 피로도가 작은 순서로 정렬
    });
    console.log(dungeons)
    let answer = 0
    let value = k
    for (let i = 0; i < dungeons.length; i++) {
        console.log(dungeons[i], value)
        if(dungeons[i][0] <= value) { // 현재 피로도가 최소 필요 피로도보다 같거나 크면
            value -= dungeons[i][1] // 현재 피로도에서 소모 피로도를 감소시키고
            answer ++ // 던전 돈 횟수 추가
        }
    }
    return answer
}

const k = 80
const dungeons = [[80,20],[50,40],[30,10]]
const answer = solution(k, dungeons)
console.log(answer)