// 석차 = scores[i][0] + scores[i][1] 내림차순으로 인센티브 차등지급
// 만약 같은 점수면 같은 등수이며 다음 순위는 건너뛴다
// ex) 1등이 3명이면 3명 모두 1등이고, 2등은 4등이 된다.
// 근무 태도 = scores[i][0], 동료평가 = scores[i][1]
// 만약 근무 태도나 동료평가가 어느 누군가보다 한 번이라도 낮은 적이 있다면
// 인센티브를 받을 수 없다.

// 반환 값: 원호의 석차, 인센티브 못받을 경우 -1
function solution(scores) {
    let answer = 1;
    let maxScore = 0; // 동료평가의 가장 높은 점수
    const wonho = scores[0];
    const wonhoSum = wonho[0] + wonho[1];
    // 기본적으로 태도로 내림차순한다. 즉 태도 점수가 높을 수록 앞에 정렬된다
    // 만약 태도점수가 동일하다면 동료평가순으로 오름차순한다.
    // 즉, 같은 등수일 때, 동료평가가 높을 수록 뒤쪽에 위치한다.
    scores.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
    for(const score of scores) {
        // 태도점수가 높을수록 앞에 위치해 있기때문에 
        // 동료 점수만 비교해 탈락대상과 인센대상을 판단할 수 있다.
        if(score[1] < maxScore) { 
            // 동료 평가점수가 한 번이라도 낮고
            if(score === wonho) return -1; // 그 평가점수가 원호와 같은 값이라면 -1리턴
        } else {
            // 동료평가 비교 : 한 명이라도 제친 평가가 있으면 max로 판별
            // 동료평가가 오름차순이기 때문에 가장 낮은점수부터 판별되어 
            // 높은점수까지 계속해서 기록되어 올라온다.
            maxScore = Math.max(maxScore, score[1])
            if(score[0] + score[1] > wonhoSum) {
                answer ++;
            }
            
        }
    }
    return answer;
}

const scores1=  [[2, 2], [2, 2], [2, 3], [3, 2]]
console.log(solution(scores1))