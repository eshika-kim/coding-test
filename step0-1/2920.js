// input : 숫자 8개 1~8까지 순서대로면 a, 8~1까지면 d, 무작위면 m
// output : ascending, descending, mix 중 하나

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
rl.on('line', line => {
    const input = line.replace(/ /g, '')
    let result = ''
    for(let i = 0; i < input.length; i++) {
        if( input[i] === '1') {
            result += 'c'
        } else if( input[i] === '2') {
            result += 'd'
        } else if( input[i] === '3') {
            result += 'e'
        } else if( input[i] === '4') {
            result += 'f'
        } else if( input[i] === '5') {
            result += 'g'
        } else if( input[i] === '6') {
            result += 'a'
        } else if( input[i] === '7') {
            result += 'b'
        } else if( input[i] === '8') {
            result += 'C'
        }
    }
    if ( result === 'cdefgabC') {
        console.log('ascending')
    } else if (result === 'Cbagfedc') {
        console.log('descending')
    } else {
        console.log('mixed')
    }
    rl.close()
})
rl.on('close',()=>{
    process.exit()
})