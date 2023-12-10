// K = number, 원하는 스코빌 지수
// scoville = [], 가지고 있는 음식의 모든 스코빌 지수
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// 배열의 각 값이 K 이상이 될 때까지 섞어야 하는 횟수를 return


function solution(scoville, K) {
    const minHeap = new MinHeap()
    let mixedcount = 0;

    for (const value of scoville) {
        minHeap.insert(value)
    }
    while ( minHeap.peek(0) < K ) { // 가장 작은 값이 K보다 클 때까지 반복
        const firstScoville = minHeap.delete()
        const secondScoville = minHeap.delete()
        const mix = firstScoville + secondScoville * 2 // 1st, 2nd숫자를 픽해서 넣어준 후
        minHeap.insert(mix) // 섞은 값 배열에 추가
        mixedcount ++ // 섞어주었으니 횟수 추가
    }
    return minHeap.peek(0) >= K ? mixedcount : -1;
}

class MinHeap {
    constructor() {
        this.heap = []
    }

    peek(n) {
        return this.heap[n] // n번째로 작은 값
    }

    size() {
        return this.heap.length - 1;
    }

    insert(value) {
        this.heap.push(value)
        if(this.heap.length === 1) { // 배열에 아무것도 없는 상태였다면 
            return // 값만 넣고 끝내기
        }
		// 부모노드를 찾은 뒤 부모노드와 비교하여 해당 값이 더 작으면 스와핑
		let currentIdx = this.size()
		let parentIdx = Math.floor((currentIdx - 1) / 2)
		while ( currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx] ) { 
		// while문 사용 : 해당 값이 이 조건에 부합하지 않을때까지 반복
			[this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]]
			// 구조분해 할당을 이용하여 값을 바꿔줌
			currentIdx = parentIdx
			parentIdx = Math.floor((currentIdx - 1) / 2 )
			// 값을 바꿔주었으니 index값도 변경해줌
		}
    }

    delete() {
        const smallestValue = this.heap[0]
        const biggestValue = this.heap.pop()

        if(this.heap.length > 0) {
            this.heap[0] = biggestValue;
            let currentIdx = 0
            while(
                this.heap[currentIdx] > this.heap[currentIdx * 2 + 1] ||
                this.heap[currentIdx] > this.heap[currentIdx * 2 + 2]
            ) {
                let smallerChildIdx = 
                    this.heap[currentIdx * 2 + 1] > this.heap[currentIdx * 2 + 2] 
                    ? currentIdx * 2 + 2 : currentIdx * 2 + 1
                // 더 작은 자식노드와 현재 값을 스와핑
    
                // 임시 변수를 사용하여 값 교환
                let temp = this.heap[currentIdx]
                this.heap[currentIdx] = this.heap[smallerChildIdx]
                this.heap[smallerChildIdx] = temp
    
                // 현재 인덱스를 업데이트
                currentIdx = smallerChildIdx
            }
        }
		
        return smallestValue // 가장 작은 값 반환
    }
}

console.log(solution([1, 2, 3, 9, 10, 12], 7))