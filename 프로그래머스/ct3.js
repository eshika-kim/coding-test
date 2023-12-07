// '.'는 이동할 수 있는 빈 칸, '#' 벽, 'o' 드론, 'v' 새
// 드론은 벽을 넘을 수 없음
// 벽을 넘지 않고 이동할 수 있는 모든 땅을 한 구역이라 한다.
// o > v 새가 떠나고
// o =< v 면 새가 드록을 격추시킴
// 격추되지 않은 드론의 수와 자리를 지키는 새의 마리수?
// 첫 줄에는 산업시대의 직사각형의 행과 열의 수 R, C가 주어진다.
// 다음 R개의 줄에 각 C칸의 구역 정보가 주어진다.
// 출력 : 남아있는 드론과 새의 수를 공백으로 나누어 출력
// 예시 
// 6 6
//...#..
//.##v#.
//#v.#.#
//#.o#.#
//.###.#
//...###
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
const input = []
rl.on("line", function(line) {
	if(!line) {
        rl.close();
    } else {
        input.push(line)
    }
}).on("close", function() {
    const [R, C] = input[0].split(' ').map(Number)
    let area = ''
    for (let i = 1; i <= R; i++) {
        area += input[i]
    }
    console.log(area)
	process.exit();
});