// min heap
class Heap {
	constructor() {
		this.heap = []
	}

	insert(value) {
		
		// 우선 가장 배열의 가장 마지막에 삽입
        
		this.heap.push(value)
        if(this.heap.length === 1) { // 배열에 아무것도 없는 상태였다면 
            return // 값만 넣고 끝내기
        }
		// 부모노드를 찾은 뒤 부모노드와 비교하여 해당 값이 더 작으면 스와핑
		let currentIdx = this.heap.length - 1
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
	// 가장 우선순위가 높은 즉, 가장 작은 숫자가 먼저 삭제된다.
	// 그 후 가장 끝에 있는 숫자가 가장 위로 올라오면서 정렬을 진행한다. 
		
		this.heap.splice(0, 1, this.heap.pop()) // 맨 앞에 있는 요소를 삭제
		let currentIdx = 0
		// 반복문 : 맨 앞의 요소가 자식노드보다 크면 스왑
		while(
			// 왼쪽 자식노드, 오른쪽 자식노드 크기 비교
			this.heap[currentIdx] > this.heap[currentIdx * 2 + 1] ||
			this.heap[currentIdx] > this.heap[currentIdx * 2 + 2]
		) {
			// 더 작은 자식노드를 변수에 할당
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
	
	// n번째로 작은 수 찾기
	findNumber(n) {

	}
}

let minArray = [10, 3, 100, 40, 80, 6, 200, 421]
const minHeap = minArray.reduce((arr, value) => {
    arr.insert(value)
    return arr
}, new Heap())
console.log('배열의 모든 값 insert 하기',minHeap.heap)
minHeap.delete()
console.log('삭제해보기',minHeap.heap)