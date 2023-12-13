// 발표한 논문 개수 : n, h번 이상 인용된 논문이 h 편 이상이고
// 나머지 논문이 h번 이하 인용 되었다면 h의 최댓값이 H-Index
// 과학자가 발표한 논문의 인용 횟수 담은 배열 : citations 
function solution(citations) {
    citations.sort((a, b) => b - a)
    let i = 0
    while(i + 1 <= citations[i]) {
        i++
    }
    return i
}

const citation = [3, 0, 6, 1, 5]
const answer = solution(citation)
console.log(answer)