// 재귀함수
// 자기 자신을 호출하는 함수 : for문과 비슷하다.
// DFS(Depth-First Search) 깊이 우선 탐색
// call stack의 실행 방식에 대해 이해하고 있어야 한다.
// 기본적으로 함수 내에 존재하는 내부함수이다.
// 아래의 함수 solution과 작동되는 방식이 다르다.

function S1(L) {
    function DFS(L) {
        if(L <= 0) return
        console.log(L) // 다음 재귀함수가 실행되기 전에 call stack에서 실행되기 때문에
        DFS(L - 1)
    } // 3, 2, 1순으로 출력된다.
    DFS(L)
}
ß
function S2(L) {
    function DFS(L) {
        if(L <= 0 ) return
        DFS(L - 1) // 모든 재귀함수가 call stack에 쌓인 뒤 
        // 돌아가기 때문에 가장 나중에 들어온 D(1)이 돌아와 console.log가 실행된다. 
        console.log(L)
    }
    DFS(L)
}

S1(3) // 3, 2, 1
S2(3) // 1, 2, 3