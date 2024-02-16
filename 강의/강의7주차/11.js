// 뮤직비디오 : 결정알고리즘(이분검색) => O(log N)
// 곡의 수 : N, DVD 개수 : M
// N개의 곡을 순서대로 만들어야한다.
// M개의 DVD에 모든 동영상을 순서대로 녹화해야 한다.
// 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 한다.
// 아래의 예제로는 (1, 2, 3, 4, 5), (6, 7), (8, 9)로 나누어
// 한 개의 DVD크기는 17분을 가지게 된다. 답은 17
// 푸는 방법 : 한 개의 DVD용량은 최소 9(배열의 최대 값) 최대 45(배열의 모든 합)이 되어야한다.

function count(songs, capacity){
    let cnt=1, sum=0;
    for(let x of songs) {
        console.log(sum)
        if(sum + x > capacity) {
            cnt ++
            sum = x
        }
        else sum += x
    }
    return cnt;
}

function solution(m, songs){
    let answer;
    let lt = Math.max(...songs)
    let rt = songs.reduce((acc, cur)=> acc + cur, 0)
    while(lt <= rt) {
        let mid = parseInt((lt + rt) / 2)
        if(count(songs, mid)<= m) {
            answer = mid
            rt = mid - 1
        } else {
            lt = mid + 1
        }
    }
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));