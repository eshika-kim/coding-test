// 기존 센서는 16개 이하의 0과1로만 이루어진 수열을 보내고
// 새로운 센서는 같은 값이 얼마나 연속 됐는지 나타내는 수열을 값으로 내보낸다.
// 1 1 0 0 0 1 이면 새로운 센서는 2 3 1 로 나타냄
// 새로운 센서가 나타내는 값은 기존 센서 형식으로 변환시 0 혹은 1로 시작하는
// 이 때 새로운 센서가 다른 값을 내보내면 기존 센서가 몇 번만의 변경으로
// 바꿀 수 있는 지 출력
// 예시 입력 : 6 3 \n 1 0 0 1 0 1 \n 1 3 2 출력 : 1 
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
    const [n, m] = input[0].split(' ').map(Number)
    const basicArr = input[1].split(' ').map(Number)
    const newSensor = input[2].split(' ').map(Number)
    
	process.exit();
});

