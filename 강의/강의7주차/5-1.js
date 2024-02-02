// 5번을 array 내장함수를 이용하여 다시 풀이
function solution(size, arr) {
    const answer = Array(size).fill(0)
    arr.forEach((number) => {
        let pos = -1
        for(let i = 0; i < size; i++) if(number === answer[i]) pos = i // 히트됐을 때
        if(pos === -1) { // cache miss
            answer.unshift(number)
            if(answer.length > size) answer.pop()
        }
        else {
            answer.splice(pos, 1)
            answer.unshift(number)
        }
        
    })
    return answer
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));