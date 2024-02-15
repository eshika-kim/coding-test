// 결혼식
// 피로연에 참석하는 친구들 N명의 도착 시간과 떠날 시간이 존재, 피로연은 0~72시간 준비
// 이 정보를 바탕으로 동시에 존재하는 최대 인원수를 구해 
// 수용할 수 있는 장소를 빌리려고 함
// 만약 한 친구가 오는 시간 13, 가는 시간 15라면 13시 정각에 존재하고 15시 정각에는 존재하지
// 않는다고 가정
// 첫째 줄에 피로연에 참석할 인원수 N(5<=N<=100,000)
// 두 번째 줄 ~ N줄까지 각 인원의 ST, ET이 주어짐
// 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인, 음이아닌 정수로 표현
// 출력 : 피로연장에 동시에 존재하는 최대 인원 출력
// 우선 두 개의 타임라인으로 저장
function solution(times){
    let answer=Number.MIN_SAFE_INTEGER;
    const party = []
    times.forEach((a) => {
        party.push([a[0],'s'])
        party.push([a[1],'e'])
    })
    party.sort((a, b) => {
        if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt()
        else return a[0] - b[0]
    })
    let cnt = 0;
    for(let x of party) {
        if(x[1] === 's') cnt ++;
        else cnt--;
        console.log('카운트',cnt)
        answer=Math.max(answer,cnt)
    }
    
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));