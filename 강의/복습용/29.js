// 프로그래머스 최빈값 구하기
function solution(arr) {
    let answer = 0;
    const ch = Array.from({length: 1001}, () => 0)
    for(let i = 0; i < arr.length; i++) {
        ch[arr[i]] ++;
    }
    const max = Math.max(...ch)
    let count = 0
    for(let j = 0; j < ch.length; j++) {
        if(ch[j] === max) {
            answer = j
            count ++
        }
        if(count >= 2) return -1
    }
    return answer;
}
const arr1 = [1, 2, 3, 3, 3, 4]
const arr2 = [1, 1, 2, 2]
const arr3 = [1]
console.log(solution(arr1))
console.log(solution(arr2))
console.log(solution(arr3))