// 회의실 배정(그리디)
// 회의가 겹치지 않으면서 회의실을 사용할 수 있는 최대수의 회의
// 첫째 줄에 회의의 수
// 둘째 줄부터 N번째 줄까지 회의의 시작시간과 끝나는 시간이 주어진다.
// 우선 끝나는 시간 순으로 오름차순 정렬한다.
// 그 다음 회의는 회의가 시작되는 시간이 끝나는 시간보다 크거나 같을 때 가능할 수 있게 한다.
// 단, 시작시간과 끝나는 시간이 같은 경우가 있기 때문에 이 때는 시작시간을 기준으로 
// 정렬한다.
function solution(meeting){
    let answer=0;
    meeting.sort((a, b) => {
        if(a[1] === b[1]) return a[0] - b[0]
        else return a[1] - b[1]
    })
    let et = 0;
    for(let x of meeting) {
        if(x[0] >= et) {
            answer ++;
            et = x[1]
        }
    }
    return answer;
}

let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr2=[[3, 3], [2, 3], [1, 3]]
console.log(solution(arr));
console.log(solution(arr2));