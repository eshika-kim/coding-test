// 1. 같은 숫자3 : 10,000 + 숫자 * 1,000 원
// 2. 같은 숫자2 : 1,000 + 숫자 * 100원
// 3. 나머지 : 가장 큰 숫자 * 100 원

const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (input) => {
    function solution(input) {
        const [a, b, c] = input.split(' ')
        if(a == b && b == c) return 10000 + (a * 1000)
        else if(a == b || b == c || a == c) return 1000 + (a * 100)
        else return Math.max(a, b, c) * 100
    }
    console.log(solution(input))
    
    rl.close()
})
rl.on('close', () => process.exit())