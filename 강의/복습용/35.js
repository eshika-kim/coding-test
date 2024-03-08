function solution(m, arr) {
    let answer = 0;
    arr.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]))
    for(let i = 0; i < arr.length; i++) {
       let money = m - (arr[i][0]/2 + arr[i][1]) // 예산에서 반값할인 한 경우
       let cnt = 1;
       for(let j = 0; j < arr.length; j++) {
            if( i !== j && money < arr[j][0] + arr[j][1]) break;
            if( i !== j && money >= arr[j][0] + arr[j][1]) {
                money -= arr[j][0] + arr[j][1]
                cnt++;
            }
       }
        answer = Math.max(answer, cnt)
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));

// 1번이 할인받고 계속 사는 경우
// 2번이 할인받고 계속 사는 경우...etc