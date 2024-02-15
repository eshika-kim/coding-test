// 붕대감기
// t초간 붕대 감으며 1초마다 x만큼 체력 회복
// 붕대감기 스킬 성공 시 추가 y만큼 체력 회복, 시전 시간이 있음
// 스킬 사용 도중 몬스터 공격을 받을 시 기술 취소당하고 연속 성공시간 0
// 최대 체력 이상 채울 수 없음
// 최대 체력: health, 붕대감기(1차원 배열): 시전시간, 1초당 회복량, 추가회복량
// 몬스터 공격패턴: [[공격시간1, 피해량1], [공격시간2, 피해량2]] 2차원 배열
// 죽으면 -1, 몬스터 공격이 끝난 후 캐릭터의 체력을 return 하는 함수

function solution(bandage, health, attacks) {
    let answer = 0;
    let hp = health
    let success = 1;
    for(let i = 0; i < attacks.length; i++) {
        for(let j = 0; j < attacks.length; j++) {
            if(hp < health) break;
            if(i === attacks[i][0]) health -= attacks[i][1]
            else if(i !== attacks[i][0] && success === 5) {
                s
            }
        }
    }
    return answer
}

const bandage1 = [5, 1, 5]
const attacks1 = [[2, 10], [9, 15], [10, 5], [11, 5]]
console.log(solution(bandage1, 30, attacks1)) // result 5
// attacks를 배열의 반복문을 돌면서 for반복전체 체력에서 1번 을 깎는다.
// 만약 for 반복문이 attacks의 시간이 아닌 사이 시간이라면 bandage[1]을
// health에 추가해주고 연속 성공 변수인 success에 ++ 한다.
// 만약 for 반복문이 attacks의 시간이 아닌 사이 시간이며 success가 5라면
// bandage[2]를 health에 추가해주고 success를 1로 초기화
// 만약 for 반복문이 해당 공격 시간이면 success를 1로 초기화하고 health
// 에 해당 반복되는 attacks의 [1]만큼 차감 