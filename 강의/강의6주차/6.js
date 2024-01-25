// 공주 구하기
// 총 N명의 왕자가 있고, 시작 번호의 왕자와 제외될 번호M이 주어진다.
// 시작 번호를 외친 왕자가 가장 먼저 제외되고,
// 다시 1번부터 구호를 외치며 번호 M을 외치게 되면 계속 제외된다.
// 마지막에 남은 왕자의 번호를 구하기
// 큐(queue) 구조 이용하기

function solution(n, k){
    let answer;
    let queue = Array.from({length: n}, (v, i)=> i + 1)
    while(queue.length) {
        for(let i = 1; i < k; i++) queue.push(queue.shift())
        queue.shift()
        if(queue.length === 1) answer = queue.shift()
    }
    return answer;
}

console.log(solution(8, 3));

const testArray = Array.from({length: 10}, (v, i) => i + 2)
console.log(testArray)