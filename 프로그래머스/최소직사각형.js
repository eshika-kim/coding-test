// 모든 명함을 수납할 수 있는 가장 작은 지갑 크기 찾기
// sizes는 w, h를 가진 명함 크기의 배열
function solution(sizes) {
    // w와 h가 가장 큰 수를 골라내야한다.
    // 단, h가 w보다 h가 크다면 배열을 뒤집을 수 있다.
    const rearrage = sizes.map(([w, h]) => w < h ? [h, w] : [w, h])

    let wallet = [0, 0]
    rearrage.forEach(([w, h]) => {
        if (w > wallet[0]) wallet[0] = w
        if (h > wallet[1]) wallet[1] = h
    })
    return wallet[0] * wallet[1]
}

const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
const sizes1 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
const sizes2 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]
const answer = solution(sizes)
const answer1 = solution(sizes1)
const answer2 = solution(sizes2)
console.log(answer)
console.log(answer1)
console.log(answer2)