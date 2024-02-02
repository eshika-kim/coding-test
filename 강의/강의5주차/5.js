// 최대 매출
// N일 동안의 매출기록 중 연속된 K일 동안의 최대 매출액
// ex) N = 10, K = 3 이면 12 15 11 20 25 10 20 19 13 15 연속된 3일간의 최대 매출액은
// 11 20 25 = 56만원
// 입력 : N (5 <= N <= 100,000), K (2 <= K <=N)
// 시간복잡도 O(2N)
// 슬라이딩 인도어 기법
function solution(k, arr){
    let answer, sum=0;
    for(let i = 0; i < k; i++) sum += arr[i] 
    answer = sum
    for(let i = k; i < arr.length; i++) {
        sum += (arr[i] - arr[i - k])
        answer = Math.max(answer, sum)
    }
    return answer;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));