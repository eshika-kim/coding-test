// participant 참가한 선수 배열
// completion 완주한 선수 배열
// 완주하지 못한 선수 return

function solution(participant, completion) {
    participant.sort()
    completion.sort()
    for( let i = 0; i < participant.length; i++) {
        if(participant[i] !== completion[i]) {
            return participant[i]
        }
    }
}

const part1 = ["leo", "kiki", "eden"]
const compl1= ["eden", "kiki"]
const part2 = ["mislav", "stanko", "mislav", "ana"]
const compl2 = ["stanko", "ana", "mislav"]
console.log(solution(part1, compl1))
console.log(solution(part2, compl2))