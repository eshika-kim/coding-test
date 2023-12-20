// 가위바위보
// 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
// 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
// 각 줄에 각회의 승자를 출력, 비겼을 경우 D 출력
function solution(a, b){         
    let answer="";
    for(let i = 0; i < a.length; i++) {
        if(a[i] === 1 && b[i] === 3) answer += 'A' + '\n'
        else if(a[i] === 2 && b[i] === 1) answer += 'A' + '\n'
        else if(a[i] === 3 && b[i] === 2) answer += 'A' + '\n'
        else if(a[i] === b[i]) answer += 'D' + '\n'
        else answer += 'B' + '\n'
    }
    return answer;
}

let a=[2, 3, 3, 1, 3];
let b=[1, 1, 2, 2, 3];
console.log(solution(a, b));