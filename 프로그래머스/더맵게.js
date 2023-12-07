// K = number, 원하는 스코빌 지수
// scoville = [], 가지고 있는 음식의 모든 스코빌 지수
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// 배열의 각 값이 K 이상이 될 때까지 섞어야 하는 횟수를 return
function solution(scoville, K) {
    let answer = 0;
    scoville.sort((a, b) => {return a - b})
    for(let i = 0; i < scoville.length; i++) {
        if(scoville[i] < K) {
            const newScovile = scoville[i] + scoville[i + 1] * 2
            if( newScovile < K) {s

            }
            scoville.splice([i], 2)
            scoville.unshift(newScovile)
        }
    }
    console.log(scoville)
    return answer;
}

const scoville1 = [1, 2, 3, 9, 10, 12]
const scoville2 = [3, 8, 20, 1, 10, 40]
const K1 = 7
solution(scoville1, K1)