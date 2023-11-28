// 아스키코드 출력하기
// 아스키코드 메서드 string.charCodeAt()

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', (line)=>{
    console.log(line.charCodeAt())
    rl.close()
})

rl.on('close', ()=>{
    process.exit();
})