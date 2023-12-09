// 최소 힙 기준
class Heap {
    constructor() {
        this.heap = [null]
    }

    heapPush(value) {
        this.heap.push(value)
        let currentIdx = this.heap.length - 1;
        let parentIdx = currentIdx / 2 >> 0 // currendIdx의 값을 0 비트만큼 오른쪽으로 이동
        // 즉 실수를 정수로 바꾸어주는 것

        // 현재 인덱스가 0이되기 전에
        // 부모 인덱스가 현재 인덱스보다 작아지면 중지
        while (currentIdx > 1 && this.heap[parentIdx] > this.heap[currentIdx]) { 
            // 현재 인덱스의 값이 부모 인덱스값보다 작으면 스와핑을 해준다
            [this.heap[parentIdx], this.heap[currentIdx]] = [this.heap[currentIdx], this.heap[parentIdx]] 
            currentIdx = parentIdx
            parentIdx = currentIdx / 2 >> 0
        }
    }
}