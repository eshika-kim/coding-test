function solution(arr, weight) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = i + 1; j < arr.length; j++) {
			if(i + j == weight) {
				return [i, j]
			}
		}
	}
	return -1;
} // 위의 시간복잡도는 O(n^2) 공간 복잡도는 O(1) 추가 메모리가 필요없기 때문

function betterSolution(arr, weight) {
	let hashTable = {}

	for(let i = 0; i < arr.length; i++) {
		let currentElement = arr[i] // 현재 도는 요소를 변수에 저장
		let difference = weight - currentElement // 현재 도는 요소가 합쳐진 수와 맞기 위한 수를 변수에 저장
		if( hashTable[currentElement] != undefined ) { // 객체에 현재 요소(값: 즉 difference가 됨)이 있다면
			return [i, hashTable[currentElement]] // 현재 요소의 index와 difference의 index를 반환하게 됨
		} else {
            console.log('else 문')
			hashTable[difference] = i // 만약 현재 도는 요소가 객체에 없으면 현재 요소의 짝 값을 key, 인덱스를 value로 할당
		}
	}
    
	return -1 // 해당 안되면 -1반환
} // 시간 복잡도 : O(n), 공간 복잡도 : O(n)
const a = [1, 2, 3, 4, 5]
const weigh = 4
console.log(betterSolution(a, weigh))