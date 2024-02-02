// Anagram : 두 문자열의 알파벳 나열 순서는 다르나
// 구성이 일치하면 두 단어는 아나그램
function solution(str1, str2){
    let answer="YES"; 
    let sH = new Map();
    for(let x of str1) {
        if(sH.has(x)) sH.set(x, sH.get(x) + 1)
        else sH.set(x, 1)
    }
    console.log(sH)
    for(let x of str2) {
        if( !sH.has(x) || sH.get(x) == 0) answer = "NO"
        sH.set(x, sH.get(x) - 1)
    }
    console.log(sH)
    return answer;
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));