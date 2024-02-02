// 모든 아나그램 찾기(해쉬, 투포인터, 슬라이딩 윈도우)
// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 
// 구하는 프로그램
// 대소문자 구분 O
// 연속된 문자열
// ex) bacaAacba, abc => 답은 3
function compareMaps(map1, map2){
    console.log(map1, map2)
    if(map1.size !== map2.size) return false
    for(let [key, val] of map1) {
        if(!map2.has(key)) return false
        if(map2.get(key)!== val) return false
    }
    return true;
}
function solution(s, t){
    let answer=0;
    let tH = new Map()
    let sH = new Map()
    for(let x of t) {
        if(tH.has(x)) tH.set(x, tH.get(x) + 1)
        else tH.set(x, 1)
    }
    let len = t.length - 1;
    for(let i = 0; i < len; i++) {
        if(sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1)
        else sH.set(s[i], 1)
    }
    let lt = 0;
    for(let rt = len; rt < s.length; rt++) {
        if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1)
        else sH.set(s[rt], 1) // 추가
        if(compareMaps(sH, tH)) answer ++ // 비교
        sH.set(s[lt], sH.get(s[lt]) - 1)
        if(sH.get(s[lt]) === 0) sH.delete(s[lt]) // 빼기
        lt ++;
    }
    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));