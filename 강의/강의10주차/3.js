// 최대 부분 증가수열(longest increasing subsequence)
// N개의 자연수로 이루어진 수열이 주어졌을 때, 그 중에서 가장 길게 증가하는
// 원소들의 집합을 찾는 프로그램 작성하기
// ex) 원소가 2,7,5,8,6,4,7,12,3이면
// 2,5,6,7,12를 뽑아내 최대 5인 증가수열을 만들 수 있다.
// dy는 그 for문을 도는 중 i번째에 해당하는 수 앞에 올 수 있는 수들을 기록하는
// 배열이다.
// 만약 arr[i] = 7이면 j가 i-1부터 돌면서 앞에 있는 수들을 체크한다.
// 그 값들 중 arr[j] < arr[i]라면 dy[i] = 그 앞에있는 수 중 dy값을 가장
// 크게 갖고있는 값을 선택하여 + 1해준다.
// 마지막으로 i의 for문을 모두 돌고나면 가장 큰 값을 가지고 있는 값을
// 반환한다.
function solution(arr) {
    let answer = 0;
    const n = arr.length
    const dy = Array.from({length:n}, () => 0)
    dy[0] = 1;
    for(let i = 0; i < n; i++) {
        let max = 0;
        for(let j = i-1; j >= 0; j--) {
            if(arr[j] < arr[i] && dy[j] > max) {
                max = dy[j]
            }
        }
        dy[i] = max + 1
        answer = Math.max(answer, dy[i])
    }
    return answer
}
const arr = [5, 3, 7, 8, 6, 2, 9, 4]
console.log(solution(arr))