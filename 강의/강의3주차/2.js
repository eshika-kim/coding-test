// 유효한 팰린드롬
// 앞에서 읽을 때나 뒤에서 읽을때나 같은 문자열

function solution(s) {
    let answer ='YES'
    const stringArr = s.toLowerCase().replace(/[^a-z]/g, '') // ^ << 아닌 것들을 뜻함(부정)
    if(stringArr.split('').reverse().join('') !== stringArr ) return 'NO' 
    return answer
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));