function solution(arr) {
    let n = arr.length;
    let answer = 0;
    let tmp1 = tmp2 = 0
    for(let i = 0; i < n; i++) {
        tmp1 = tmp2 = 0;
        for(let j = 0; j < n; j++) {
            tmp1 = tmp1 + arr[i][j]
            tmp2 = tmp2 + arr[j][i]
        }
        answer = Math.max(tmp1, tmp2)
    }
    tmp1 = tmp2 = 0
    for(let k = 0; k < n; k++) {
        tmp1 = tmp1 + arr[k][k]
        tmp2 = tmp2 + arr[k][n-k-1]
    }
    answer = Math.max(answer, tmp1, tmp2)
    return answer;
}
let arr=[
    [10, 13, 10, 12, 15], 
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]
];
console.log(solution(arr));