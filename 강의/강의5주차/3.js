// 연속 부분수열1
// N개의 수로 이루어진 수열이 주어진다.
// 이 수열에서 연속부분수열의 합이 특정숫자M이 되는 경우가 몇 번 있는지 구하는 프로그램
// 만약 N=8, M=6이고 수열이 1 2 1 3 1 1 1 2 라면
// 합이 6이 되는 연속부분수열은 [2, 1, 3], [1, 3, 1, 1], [3, 1, 1, 1] 총 3가지
// 시간복잡도 : O(N)
function solution(m, arr){
    let answer=0, lt=0, sum=0;
    for(let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt]
        if(sum === m) {
            answer ++
            console.log(rt, lt)
        }
        while(sum >= m) {
            sum -= arr[lt++]
            if(sum === m) {
                answer++
                console.log(rt, lt)
            }
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));