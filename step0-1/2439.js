// 별찍기 : input에 숫자 N이 주어지면 첫 번째줄부터 N번쨰 줄까지 차례대로 별 출력

const fs = require('fs')
const input = parseInt(fs.readFileSync('text.txt','utf-8'))
const result = N => {
                        for (let i = N-1; i >= 0; i--) {
                            let answer = ''
                            for(let j = 1; j <= i; j++) {
                                answer += ' '
                            }
                            for (let k = 1; k <= N - i; k++) {
                                answer += '*'   
                            }
                            console.log(answer)
                        }
                    }

result(input)
// const input = fs.readFileSync('/dev/stdin', 'utf-8')