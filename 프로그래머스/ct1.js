// 식당은 A, B, C만 존재
// 식당 반복수 줄이기
// 첫 번째는 연속 구간을 없애기 => 이 때 손실되는 날짜 수 예시 : AAABBCCBCAAC => ABCBCAC 즉 5개
// 두 번째는 연속 구간 값 중 일부를 바꿔 연속 구간을 없애는 것 => 이 때 바꿔줘야 하는 최소 날짜 수
// AAABBCCBCAAC => ABAABCCBCAAC => ABABACCBCAAC => ABABCACBCAAC => ABABCACBACAC 즉 4번
// 예시 입력 : AAABBCCBCAAC // 출력: 5 4
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const stringArr = line.split('')
	const eliminatedArr = []
    for (let i = 0; i < stringArr.length -1; i++) {
        if(stringArr[i] !== stringArr[i+1]) {
            eliminatedArr.push(stringArr[i])
        }
    }
    const date = stringArr.length - eliminatedArr.length - 1
	function rearrageArr (arr) {
        let count = 0
        const nonduplicatedArr = [arr[0]]
        for (let i = 1; i < arr.length - 1; i ++) {
            if(arr[i] === arr[i - 1]) {
                const duplicateChar = arr[i]
                const nondupliCharIndex = arr.findIndex(element => element !== arr[i])
                nonduplicatedArr.push(arr[nondupliCharIndex])
                arr.splice(i, 1, nondupliCharIndex)
                arr.splice(nondupliCharIndex, 1, duplicateChar)
                count ++;
            }
        }
        return count
	}
    const rearrCount = rearrageArr(stringArr)
    console.log(date, rearrCount)
    
	rl.close();
}).on("close", function() {
	process.exit();
});