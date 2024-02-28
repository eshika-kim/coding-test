function solution(str) {
    let answer = "";
    for(let x of str) {
        let num = x.charCodeAt()
        if(num >= 65 && num <= 90) answer += String.fromCharCode(num + 32)
        else if(num > 65 && num <= 122) answer += String.fromCharCode(num - 32)
    }

    return answer;
}
console.log(solution("StuDY"))