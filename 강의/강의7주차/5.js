// Least Recently Used(카카오 캐시 문제 변형) : 삽입정렬응용
// 캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 
// CPU처리할 작업을 저장해 놓았다가 필요할 때 바로 사용해서 처리속도를 높이는 장치이다.
// 철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU알고리즘을 따른다.
// LRU알고리즘은 최근에 사용도지 않은 것으로 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지
// 않은 것을 제거하겠다는 알고리즘이다.
// 만약 캐시의 사이즈가 5익 작업이 [2, 3, 1, 6, 7]순으로 저장되어 있다면
// 맨 앞은 최근에 쓰인 작업, 맨 뒤는 가장 오랫동안 쓰지 않은 작업
// 1) Cache Miss : 해야할 작업이 캐시에 없는 상태로 위 상태에서 새로운 작업인 5번 작업을
// CPU가 사용한다면 Cache miss가 되고 모든 작업이 뒤로 밀리고 5번 작업은 캐시의 맨 앞에 위치
// 그리고 7은 삭제된다. [5, 2, 3, 1, 6]
// 2) Cache Hit : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용한다면
// Cache Hit이 되고, 3번 앞에있는 5, 2번은 뒤로 한 칸씩 밀리고 [3, 5, 2, 1, 6]이 된다.
// 캐시의 크기가 주어지고 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례대로 처리한다면
// N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램 작성
// 입력 : 캐시 크기 S(3 <= S <= 10) 작업의 개수 N (5 <= N <= 1,000)이 입력된다
// N개의 작업번호가 처리순으로 주어진다. 작업번호는 1~100이다.
// 마지막 작업 후 캐시메모리의 상태를 차례로 출력
// queue의 자료구조를 사용하면 좋을 듯.
function solution(S, N, num) {
    const cache = Array.from({length: S}, () => 0)
    num.forEach((number)=>{
        if(!cache.includes(number)) { // 배열에 작업 번호가 없으면 Cache miss
            cache[S-1] = number
            for(let i = S - 1; i >= 1; i--) { // 삽입 정렬
                cache[i] = cache[i-1] 
            } 
        }
        if(cache.includes(number)) {
            for(let i = cache.findIndex(a=> a===number); i >= 1; i--) { // 배열에 작업 번호가 있으면 Cache hit
                cache[i] = cache[i-1] 
            } 
        }
        cache[0] = number
    })
    return cache
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, 9, arr));