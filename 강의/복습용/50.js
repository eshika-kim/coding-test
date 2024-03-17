// 프로그래머스 배열 만들기 4
// i = 0 ~ arr.length까지 반복
// stk이 빈배열이면 arr[i]를 stk에 추가하고 i에 1을 더한다.
// stk에 원소가 있고
// 1) stk의 마지막 원소가 arr[i]보다 작으면 stk에 arr[i]를 추가 후 i++
// 2) 마지막 원소가 크면 stk의 마지막 원소를 stk에서 제거
function solution(arr) {
    const stk = [];
    let i = 0
    while( i < arr.length ) {
        console.log(stk)
        if(stk.length === 0) {
            stk.push(arr[i])
            i++
        }
        else if(stk.length !== 0 ) {
            if(stk[stk.length-1] < arr[i]) {
                stk.push(arr[i])
                i++
            }
            else if(stk[stk.length-1] >= arr[i]) {
                stk.pop()
            }
        }
    }
    return stk;
}

const arr = [1, 4, 2, 5, 3]
console.log(solution(arr))