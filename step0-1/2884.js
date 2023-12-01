// input: 시간 H, 분 M 이 주어지며 24시간 표현시간
// output : input -45분의 시간/분 출력
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})


rl.on('line', line => {
    const [H, M] = line.split(' ').map(Number)
    if( M < 45 ) {
        if( H === 0 ) {
            console.log(H + 23, 60 - 45 + M)
        } else {
            console.log(H - 1, 60 - 45 + M)
        }
    } else {
        console.log(H, M - 45)
    }
    rl.close()
})

rl.on('close',()=>{
    process.exit()
})