// 작업은 한 번에 하나의 요청만 수행할 수 있음
// a. 요청한 작업을 순서대로 처리하는 평균 시간
// b. 요청을 짧은 순으로 처리하는 평균 시간
// jobs = [요청되는 시점, 소요시간]을 담은 2차원 배열
// b의 평균시간을 반환 (소수점 이하의 수는 버림) 

// 1. job의 소요시간이 짧은 순으로 정렬
// 2. 소요시간이 같다면 요청되는 시점이 작을 수록 우선순위가 높다.
// 3. 대기시간은 항상 +1 이 있다. 
// 4. 첫 번째는 소요시간, 두 번째 부터 끝까지는 소요시간 + 1이 걸린다.
// 4-1. 첫 번째로 온 요청은 항상 먼저 실행됨
// 5. 총 걸린시간이 있는 배열을 받아 각 값을 더한 후 배열의 크기만큼 나눠준 값을 반환
// 문제의 의도 : Shortest Job First
function solution(jobs) {
    const count = jobs.length; // 작업 요청의 수
    const minHeap = new MinHeap(); // 힙 인스턴스 할당
    jobs.sort((a,b) => a[0]-b[0]); // 작업을 들어온 순으로 정렬
    
    let totalJobs = jobs.length
    let done = 0; // 작업 순번
    let temp = []
    let current = 0
    
    while( done < totalJobs ) { // 
        while (jobs[0] && current >= jobs[0][0]) {
            minHeap.heappush(jobs.shift())
        }
        if (minHeap.size()) {
            let [startTime, cost] = minHeap()
        }
    }
  }
  
  class MinHeap {
      constructor() {
          this.heap = [ null ];
      }
      
      size() {
          return this.heap.length - 1;
      }
      
      getMin() {
          return this.heap[1] ? this.heap[1] : null;
      }
      
      swap(a, b) {
          [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
      }
      
      heappush(value) {
          this.heap.push(value);
          let curIdx = this.heap.length - 1;
          let parIdx = (curIdx / 2) >> 0; // 정수부분만 자름, -1안하는 이유는 heap이 null 상태이므로
          // 아무것도 없는 상태에서도 heap의 length는 1이다.
          
          while(curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
              this.swap(parIdx, curIdx)
              curIdx = parIdx;
              parIdx = (curIdx / 2) >> 0;
          }
      }
      
      heappop() {
          const min = this.heap[1];	 // 가장 작은 수를 변수에 저장
          if(this.heap.length <= 2) this.heap = [ null ]; // 가장 작은 수밖에 없다면 heap은 null 상태로 바뀜
          else this.heap[1] = this.heap.pop();  // 그게 아니라면 가장 끝에있는 수를 첫 번째로 가져옴(min heap의 삭제방법)
          
          let curIdx = 1; 
          let leftIdx = curIdx * 2;
          let rightIdx = curIdx * 2 + 1; // idx가 1부터 시작하므로 +2가 아니고 1
          // 삭제 후 정렬
          if(!this.heap[leftIdx]) return min; // 왼쪽 노드가 없다면 가장 작은 수를 반환
          if(!this.heap[rightIdx]) { // 오른쪽 노드가 없고 왼쪽 노드만 있는 상태
              if(this.heap[leftIdx][1] < this.heap[curIdx][1]) { // 왼쪽 자식노드와 현재 노드를 비교해 현재 노드가 더 크면
                  this.swap(leftIdx, curIdx); // 스왑 후
              }
              return min; // 가장 작았던 수를 반환
          }
  
          while(this.heap[leftIdx][1] < this.heap[curIdx][1] || this.heap[rightIdx][1] < this.heap[curIdx][1]) {
            // 왼쪽 자식 idx 또는 오른쪽 자식 idx의 값이 현재 idx보다 작으면 아래와 같은 작업을 반복
              const minIdx = this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
              // 작은 idx 골라내기 : 오른쪽 왼쪽 중 더 작은 값을 선택해서
              this.swap(minIdx, curIdx);
              // 더 작은 자식 idx와 현재 idx를 swap
              curIdx = minIdx;
              leftIdx = curIdx * 2;
              rightIdx = curIdx * 2 + 1;
              // 현재 idx, 왼쪽 idx, 오른쪽 idx 다시 값 할당
              if(leftIdx >= this.size()) break; // 왼쪽 자식 idx가 배열의 크기보다 클 수 없으므로 중지
          }
  
          return min; // min값 반환
      }
  }
const jobs = [[0, 3], [1, 9], [2, 6]]
const answer = solution(jobs)
console.log(answer)