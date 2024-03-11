// 배열의 유사도

function solution(s1, s2) {
    let answer = 0;
    for(let x of s1) {
        if(s2.includes(x)) answer ++;
    }
    return answer;
}

const a = ["a", "b", "c"]
const b = ["com", "b", "d", "p", "c"]	
console.log(solution(a, b)) // 2