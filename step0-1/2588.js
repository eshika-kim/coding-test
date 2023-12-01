const fs = require('fs')
const input = fs.readFileSync('text.txt','utf-8').replace(/\r/g,'').split('\n')
const [A, B] = input

const sum = []
multiply = (a, b) => {
    for(let i = 2; i >= 0; i--) {
        sum.push(Number(a) * Number(b[i]))
    }
}
multiply(A, B)
sum.forEach(a=>{
    console.log(a)
})
console.log(sum[0]+sum[1]*10+sum[2]*100)

// const input = fs.readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n')
// 제출할 때 replace 부분은 toString().trim().split('\n')으로 바꿀 것