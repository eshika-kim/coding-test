// 순열 구하기
// 10개 이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법
function solution(m, arr){         
    let answer=[];
    let n = arr.length
    const ch = Array.from({length:n}, () => 0)
    const tmp = Array.from({length:m}, () => 0)
    function DFS(L) {
        if(L === m) {
            answer.push(tmp.slice())
        }
        else {
            for(let i = 0; i < n; i++) {
                if(ch[i] === 0) {
                    ch[i] = 1;
                    tmp[L] = arr[i];
                    DFS(L + 1)
                    ch[i] = 0;
                }
            }
        }
    }
    DFS(0);
    answer.sort()
    return answer;
}

let arr=[3, 6, 9, 5];
console.log(solution(2, arr));