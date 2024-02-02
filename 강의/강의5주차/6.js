// 학급회장 : Hash
// A, B, C, D, E 후보
// 반 학생 수 N (5 <= N <= 50)
function solution(s){  
    let answer;
    let cnt = new Map()
    for (let x of s) {
        if(cnt.has(x)) cnt.set(x, cnt.get(x) + 1)
        else cnt.set(x, 1)
    }
    let max = Number.MIN_SAFE_INTEGER
    for(let [key, val] of cnt) {
        if(val > max) {
            max = val
            answer = key
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));