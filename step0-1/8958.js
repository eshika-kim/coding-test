const fs = require('fs')
const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g,'').split('\n')
for (let i = 1; i < input.length; i++) {
    let score = 0
    let sum = 0
    for (let j = 0; j < input[i].length; j++) {
        if( input[i][j] === 'O') {
            score ++
        } else {
            score = 0;
        }
        sum += score
    } 
    console.log(sum)
}


// const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n')
// 제출할 때 replace 부분은 toString().trim().split('\n')으로 바꿀 것