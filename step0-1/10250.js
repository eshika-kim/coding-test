// input : 1st line - T 2nd line -H, W, N 정수, 호텔의 층 수, 층의 방 수, 몇 번째 손님
// output : N 번째 손님에게 배정되어야 하는 방 번호를 출력한다.
const fs = require('fs')
// const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g,'').split('\n')
const input = fs.readFileSync('text.txt', 'utf-8').toString().trim().split('\n')
console.log(input)
function a (input) {
    return [H, W, N] = input.split(' ').map(Number)
}

// let floor = ''
// let roomNumber = ''
// for (let i=1; i < input.length; i++) {
//     const result = a(input[i])
//     if(Math.ceil(result[2] / result[0]) < 9) {
//         roomNumber = '0' + Math.ceil(result[2] / result[0])
//     } else {
//         roomNumber = Math.ceil(result[2] / result[0]).toString()
//     }
//     floor = result[2] % result[0]
//     console.log(floor + roomNumber)
// }

// 402
// 1203

// const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n')
// 제출할 때 replace 부분은 toString().trim().split('\n')으로 바꿀 것