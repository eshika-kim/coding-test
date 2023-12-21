// 숫자만 추출
// 문자+숫자가 섞여있는 문자열에서 숫자만 추출하기

function solution(s) {
    const answer = parseInt(s.replace(/[^0-9]/g,''))
    return answer
}

function solution2(str) {
    let answer = 0
    for(let x of str) {
        if(!isNaN(x)) answer=answer*10+Number(x)
    }

    return answer
}

let str="g0000en2T0s8eSoft";
console.log(solution(str));
console.log(solution2(str));