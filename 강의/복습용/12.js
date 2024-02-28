
function solution(str) {
    let answer = "";
    for(let x of str) {
        if(x.charCodeAt() >= 65 && x.charCodeAt() <= 90) answer += x
        else answer += String.fromCharCode(x.charCodeAt() - 32)
    }
    return answer;
}
console.log(solution("ItisTimeToStudy"))