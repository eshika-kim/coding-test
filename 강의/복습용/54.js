function solution(name) {
    let answer = 0;
    let min = name.length - 1;
    
    for (let i = 0; i < name.length; i++) {
        let currentAlphabet = name.charCodeAt(i);
        // 65 ~ 90 대문자 알파벳 26개의 알파벳
        // 13번 이상움직이게 되면 뒤로 움직이는 게 빠르므로
        // 아스키코드가 65 ~ 78사이면 ▲ (+1)
        // 아스키코드가 79 ~ 90사이면 ▼ 로 움직이는 것이 낫다 (+25 - 1)
        if(currentAlphabet < 78) {
            answer += currentAlphabet % 65;
        } else {
            answer += 91 - currentAlphabet;
        }
        let nextIdx = i + 1;
        while(nextIdx < name.length && name.charCodeAt(nextIdx) === 65) { // 다음 알파벳이 A일때는
            // 커서가 ▶ 이든 ◀ 이든 넘어가게 한다.
            nextIdx += 1;
        }
        min = Math.min(min, i * 2 + name.length - nextIdx, i + (name.length - nextIdx) * 2)
    }
    answer += min
    return answer;
}

const str = "JEROEN"
const str2 = "JAZ"
console.log(solution(str))
console.log(solution(str2))

// ▲ 다음 알파벳으로 이동
// ▼ 이전 알파벳 A => Z로 이동
// ◀ 커서를 왼쪽으로 이동
// ▶ 커서를 오른쪽으로 이동
// 