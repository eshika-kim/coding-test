// 앞에서 읽을때나 뒤에서 읽을 때 같은 문자열을 회문 문자열이라 한다.
// 대소문자 구분하지 않고 회문 문자열이면 'YES' 아니면 'NO'를 출력
function solution(s){
    let answer="YES";
    let string = s.toLowerCase()
    let reverse = ''
    for(let i = s.length -1; i >= 0; i--) {
        reverse += string[i]
    }
    if( string !== reverse ) answer = 'NO'
    return answer;
}

function solution2(s) {
    let answer = "YES"
    s = s.toLowerCase()
    let len = s.length
    for(let i = 0; i < Math.floor(len/2); i ++) {
        if(s[i] !== s[len-i-1]) return 'NO'
    }
    return answer
}


const str="goooG";
const str1 = "abc"
console.log(solution(str));
console.log(solution2(str));
console.log(solution(str1));
console.log(solution2(str1));

console.log(str.split('').reverse())