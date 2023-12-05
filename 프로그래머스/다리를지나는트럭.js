// bridge_length는 트럭이 지나갈 수 있는 최대 대수
// wieght 은 다리의 최대하중
// truck_weights는 트럭들의 무게 배열
// output : 모든 트럭이 다리를 건너게 되는 시간(초)
// 풀이 방법
// 1-1) 먼저 다리의 길이만큼 크리를 가진 배열을 생성
// 1-2) 시간을 계산할 수 있는 time 변수와 다리의 하중을 계산해주는 brigeWeightSum 변수 생성
// 2-1) 트럭 배열에 있는 요소 하나 씩 bridge에 끝에 밀어넣는다
// 2-2) 올라간 트럭의 무게를  brigeWeightSum에 더한다.
// 2-3) 다리의 길이를 맞추기 위해 배열을 shift해준다.

function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({length: bridge_length}, () => 0) 
    // 다리 길이만큼의 크기를 가진 배열을 생성(모든 값은 0)
    let time = 0
    let bridgeWeightSum = 0
    time ++ // 우선 시간을 더하고
    bridge.shift() // 맨 앞 배열을 -1해준 다음
    bridgeWeightSum += truck_weights[0]; // 첫 트럭을 우선 합산
    bridge.push(truck_weights.shift()) // 트럭배열의 맨 앞에 있는 놈을 새 배열에 추가

    while (bridgeWeightSum > 0) { // 첫 트럭이 들어간 후라면
        time ++ // 우선 시간을 더하고
        bridgeWeightSum -= bridge.shift() // 요소를 하나 빼서 합산한 현재 다리무게를 뺀다.
        if( truck_weights.length > 0 && bridgeWeightSum + truck_weights[0] <= weight) {
            bridgeWeightSum += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
    }
    return time
}


// 예시
const bridgeLength1 = 2
const bridgeWeight1 = 10
const truckWeights = [7,4,5,6]

console.log(solution(bridgeLength1, bridgeWeight1, truckWeights))