// 이진트리 탐색
// 전위순회 : 1 => 2 => 4 => 5 => 3 => 6 => 7
// 중위순회 : 4 => 2 => 5 => 1 => 6 => 3 => 7
// 후위순회 : 4 => 5 => 2 => 6 => 7 => 3 => 1
// 1. 전위순회
// function solution(v) {[]
//     let answer;
//     function DFS(v) {
//         if(v > 7) return
//         else {
//             console.log(v)
//             DFS(v*2)
//             DFS(v*2+1)
//         }
//     }   
//     DFS(v)
// }
// console.log(solution(1))

// 2. 중위순회
function solution(v) {
    let answer;
    function DFS(v) {
        if(v > 7) return
        else {
            DFS(v*2)
            console.log(v)
            DFS(v*2+1)
        }
    }   
    DFS(v)
}
console.log(solution(1))
// 3. 후위순회
function solution(v) {
    let answer;
    function DFS(v) {
        if(v > 7) return
        else {
            DFS(v*2)
            DFS(v*2+1)
            console.log(v)
        }
    }   
    DFS(v)
}
console.log(solution(1))