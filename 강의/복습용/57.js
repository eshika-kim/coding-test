// 구명보트
// 구명보트는 최대 2명씩 탈 수 있고 무게제한이 l이 있다.
// ex) [70, 50, 80, 50], l = 100이면 50, 50두명이 타고 70, 80타고 총 
// 3번을 왔다갔다 할 수 있다. 최소한의 수로 구명보트를 이용하려면?
function solution(people, limit) {
    people.sort((a, b)=> a - b)
    let answer = 0;
    let left = 0
    let right = people.length - 1;
    while(left <= right) {
        if(people[left] + people[right] > limit) {
            right --;
        } else if (people[left] + people[right] <= limit) {
            left ++;
            right --;
        }
        answer ++;
    }
    return answer;
}
const people1 = [70, 50, 80, 50]
console.log(solution(people1, 100)) // return 3