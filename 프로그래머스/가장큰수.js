// 양의 정수가 주어졌을 때 이어붙여 만들 수 있는 가장 큰 수

function solution(numbers) {
    let answer = numbers
        .map(String)
        .sort((a, b) => (b + a) - (a + b))
        .join('')
    return answer[0] === "0" ? "0" : answer // answer의 첫 값이 0이면 0을 반환하고 아니면 answer반환
}

const arr = [6, 10, 2]
const answer = solution(arr)
console.log(answer)
