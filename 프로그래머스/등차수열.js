// a : 첫째 항, d: 공차 (ex: a= 3, b= 4이면 [3, 7, 11, ...])
// included = 길이가 n인 boolean만 들어있는 배열
// a로 시작하는 n의 길이의 등차수열이 included 배열 내 true인 값만 더해서 총 합을 반환 
function solution(a, d, included) {
    const numArr = []
    for (let i = 0; i < included.length; i++) {
        if(included[i] == true) {
            let value = a + i * d
            numArr.push(value)
        }
    }
    return numArr.reduce((acc, idx)=> acc+idx)
}

const test = [true, false, false, true, true]
const answer = solution(3, 4, test)
console.log(answer)

// 다른 사람 풀이
function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}