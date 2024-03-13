// 스택, 큐 문제 기능개발
// 큐 => 앞에 있는게 무조건 먼저 되어야 뒤에 있는 배포가 이루어짐
function solution(progresses, speeds) {
    const answer = []
    const days = []
    // 배포되는 소요일 (100 - 93 ) / 1 = 7일  (100 - 30) / 30 = 3일
    for(let i = 0; i < progresses.length; i ++) {
        const ETA = Math.ceil((100 - progresses[i])/speeds[i])
        days.push(ETA)
    }
    
    while(days.length) {
        let flag = 1;
        const progressing = days.shift();
        while(progressing >= days[0]) {
            flag++;
            days.shift()
        }
        answer.push(flag)
    }
    return answer;
}

const progresses = [93, 30, 55]
const speeds = [1, 30, 5]
console.log(solution(progresses,speeds))

