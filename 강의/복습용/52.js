// 프로그래머스 스택/큐 lv2 다리를 지나는 트럭
// bridge_length : 다리를 지날 수 있는 최대의 트럭 수
// weight : 버틸 수 있는 최대 무게
// truck_weight : 지나가려고 하는 트럭 무게 배열

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    const queue = Array.from({length:bridge_length}, () => 0)
    while(queue.length) {
        queue.shift()
        if(truck_weights.length) {
            const currentWeight = queue.reduce((a, b) => a + b, 0)
            if(currentWeight + truck_weights[0] <= weight) queue.push(truck_weights.shift())
            else queue.push(0)
        }
        answer ++;
    }
    return answer;
}

const truck_weights1 = 	[10,10,10,10,10,10,10,10,10,10]
console.log(solution(100, 100, truck_weights1)) // 110