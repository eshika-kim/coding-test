// 마구간 정하기
// N개의 마구간이 수직선상에 있다.
// 각 마구간은 x1, x2, x3, ... xN의 좌표를 가지며 중복은 없다.
// 현수는 C마리의 말을 가지고 있으며 각 마구간에는 한 마리의 말만 넣을 수 있다.
// 가장 가까운 두 말의 거리가 최대가 되게 배치해야한다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가
// 최대가 되는 그 최대값을 출력하는 프로그램을 작성
function count(stable, dist){
    let cnt=1, ep = stable[0] //cnt는 말의 수
    for(let x of stable) {
        if(x - ep >= dist) {
            ep = x;
            cnt++;
        }
    }
    return cnt;
 }
 function solution(c, stable){
    let answer;
    stable.sort((a, b) => a - b)
    let lt = 1, rt = stable[stable.length-1]
    while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2)
        if(count(stable, mid) >= c) {
            answer = mid;
            lt = mid + 1
        }
        else rt = mid - 1
    }
    return answer;
 }

 let arr=[1, 2, 8, 4, 9];
 console.log(solution(3, arr));