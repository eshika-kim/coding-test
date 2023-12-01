// input : 1st line - T 2nd line -H, W, N 정수, 호텔의 층 수, 층의 방 수, 몇 번째 손님
// output : N 번째 손님에게 배정되어야 하는 방 번호를 출력한다.
const fs = require('fs')
const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g,'').split('\n')
const T = input[0]
const findRoomNum = (input) => {
    const [H, W, N] = input.split(' ').map(Number)
    let count = 0
    for (let i =1; i<=W; i++) {
        for(let j=1; j<=H; j++) {
            count++
            if(count === N) {
                console.log(String(j)+String(i<10?'0'+String(i):i))
                break;
            }
        }
        if(count === N) break;
    }
}
for(let k=1; k <= T; k++) findRoomNum(input[k])
// 402
// 1203

// const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n')
// 제출할 때 replace 부분은 toString().trim().split('\n')으로 바꿀 것