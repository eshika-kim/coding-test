// 격자판 최대합
// 정사각형의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력
function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER
    let col = 0
    let row = 0
    for (let i = 0; i < arr.length; i++) {
        col = row = 0
        for(let j = 0; j < arr.length; j++) {
            row += arr[i][j]
            col += arr[j][i]
        }
        answer = Math.max(answer, col, row)
    }
    col = row = 0
    for(let i = 0; i < arr.length; i++) {
        col += arr[i][i]
        row += arr[i][arr.length-i-1]
    }
    answer=Math.max(answer, col, row)
    return answer
}

let arr=[
    [10, 13, 10, 12, 15], 
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(arr))
