// 합이 같은 부분집합
// N개의 원소로 이루어진 자연수 집합이 주어지면 이 집합을 두개의 부분집합으로 나누었을 때
// 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 YES출력
// 그렇지 않으면 NO를 출력
// 내가 푼 방식
// ex) {1, 3, 5, 6, 7, 10}  =>  {1, 3, 5, 7} = {6, 10}
function solution(arr){
    let answer="NO", flag=0;
    const sum = arr.reduce((acc, cur) => acc + cur, 0)
    const ch = Array.from({length: arr.length}, () => 0)
    const nums = []
    function DFS(v) {
        if(v === arr.length) {
            let tmp = 0
            for(let i = 0; i < arr.length; i++) {
                if(ch[i] === 1) tmp += parseInt(arr[i])
            }
            if(tmp > 0) nums.push(tmp)
        } else {
            ch[v] = 1
            DFS(v + 1)
            ch[v] = 0
            DFS(v + 1)
        }
    }
    DFS(0)
    console.log(nums)
    for(let x of nums) {
        if(sum - x === x) answer = "YES"
    }
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));