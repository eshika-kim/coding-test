// K = number, 원하는 스코빌 지수
// scoville = [], 가지고 있는 음식의 모든 스코빌 지수
// 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
// 배열의 각 값이 K 이상이 될 때까지 섞어야 하는 횟수를 return

function solution(scoville, K) {
    let count = 0;
    const heap = scoville.reduce((heap, food) => {
        heap.insert(food)
        return heap
    }, new MinHeap())
    console.log(heap)
    while(heap.getMin() < K) { // 두번째로 작은 값이 K보다 작을때까지 반복
        if(heap.size() < 2) { // 배열의 값이 부족하니 -1반환, 섞는 것 불가능함
            return -1;
        }
        heap.insert(heap.remove() + heap.remove() * 2) // 가장 작은값, 그리고 다음 작은 값 * 2
        count += 1
    }
    return count;
}

class MinHeap {
    constructor() {
        this.heap = [null]
    }

    getMin() {
        return this.heap[1] // 두 번째로 작은 값
    }

    size() {
        return this.heap.length - 1;
    }

    insert(value) {
        this.heap.push(value)
        let currentIdx = this.heap.length - 1;
        let parentIdx = Math.floor(currentIdx / 2)
        if(this.heap.length > 1) {
            while( currentIdx > 1 && this.heap[parentIdx] >= this.heap[currentIdx] ) {
                [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]]
                currentIdx = parentIdx
                parentIdx = Math.floor(currentIdx / 2)
            }
        }
    }

    remove() {
        let smallest = this.heap[1] // 두 번째로 작은 값

        if (this.heap.length > 2) { // 힙의 크기가 3이상이면
            this.heap[1] = this.heap[this.heap.length - 1] // 가장 큰 값을 두 번째로 작은값 위치에 할당 
            this.heap.splice(this.heap.length - 1) // 두 번째로 작은 값이 잘라내짐

            if(this.heap.length === 3) { // 배열의 길이가 3이면
                if(this.heap[1] > this.heap[2]) { 
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]] // 값을 스와핑
                }
                return smallest
            }
            let current = 1; // 왜 current가 1이지? length -1 이 아니고?
            let leftChildIdx = current * 2
            let rightChildIdx = current * 2 + 1

            while (
                this.heap[leftChildIdx] &&
                this.heap[rightChildIdx] &&
                (this.heap[current] > this.heap[leftChildIdx] || 
                    this.heap[current] > this.heap[rightChildIdx])
            ) {
                if (this.heap[leftChildIdx] < this.heap[rightChildIdx]) {
                    [this.heap[current], this.heap[leftChildIdx]] = 
                    [this.heap[leftChildIdx], this.heap[current]]
                    current = leftChildIdx
                } else {
                    [this.heap[current], this.heap[rightChildIdx]] =
                    [this.heap[rightChildIdx], this.heap[current]]
                    current = rightChildIdx
                }

                leftChildIdx = current * 2
                rightChildIdx = current * 2 + 1
            }
        } else if (this.heap.length === 2) {
            this.heap.splice(1)
        } else {
            return null;
        }

        return smallest
        
    }
}