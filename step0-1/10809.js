// input : 첫째 줄에 단어 S
// output : a-z알파벳 중 처음 등장하는 위치를 공백으로 구분해서 출력
// 없으면 -1 출력
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', line => {
    const regExp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let count = ''
    for ( let j = 0; j < regExp.length; j ++ ) {
        if(line.indexOf(regExp[j]) === -1) {
            count += '-1' + ' '
        } else {
            count += String(line.indexOf(regExp[j])) + ' '
        }       
    }
    console.log(count)
    rl.close()
})
rl.on('close', () => {
    process.exit()
})