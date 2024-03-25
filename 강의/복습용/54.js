function solution(name) {
    let answer = 0;
    let min = name.length - 1;
    // 문자열에 A가 없다면 커서는 계속해서 오른쪽으로 간다.
    // 또한 커서는 처음에 첫 번째 문자에 있기 때문에 문자열길이 -1이 최소횟수이다.
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
        } // 여기까지는 현재 커서의 위치에서 알파벳을 바꾸는 횟수를 세는 것이다.
        let nextIdx = i + 1;
        while(nextIdx < name.length && name.charCodeAt(nextIdx) === 65) { 
            // 문자열에서 A를 찾을 때까지 반복한다.
            // 문자열의 i+1 번째문자가 A가 아니면 계속해서 +2 +3 문자열의 끝 -1 번째까지 찾는다.
            nextIdx += 1;
        } // 문자열에서 A를 찾게되는 경우 ("JAZ"에서) 그러면 nextIdx = 2이다.
        console.log(nextIdx)
        console.log('min:', min, '왼쪽으로가는경우', i*2+name.length-nextIdx, '오른쪽으로가는경우', i +(name.length-nextIdx)*2)
        min = Math.min(min, i * 2 + name.length - nextIdx, i + (name.length - nextIdx) * 2)
        // 만약 A가 있다면 왼쪽으로 가는 것이 최소 회수이므로
        // min = 2
        // 0 * 2 + 3 - 2 = 1 한 번 움직이는 것과
        // 0 + (3 - 2) * 2 = 2 두 번 움직이는 것을 비교하면 왼쪽 이므로 왼쪽으로 움직이는 것이 최소값이다.
    }
    answer += min
    return answer;
}

const str = "JEROEN"
const str2 = "JAZ"
// console.log(solution(str))
console.log(solution(str2))

// ▲ 다음 알파벳으로 이동
// ▼ 이전 알파벳 A => Z로 이동
// ◀ 커서를 왼쪽으로 이동
// ▶ 커서를 오른쪽으로 이동
// 