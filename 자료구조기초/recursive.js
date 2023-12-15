// 십진수를 이진수로 변환하기
// 기저 경우: n이 2보다 작을 때
function base10ToString(n) {
    let binaryString = ''
    function base10ToStringHelper(n) {
        if(n < 2) {
            binaryString += n
            return
        } else {
            base10ToStringHelper(Math.floor(n / 2))
            base10ToStringHelper(n % 2)
        }
    }
    base10ToStringHelper(n)
    return binaryString
}
console.log(base10ToString(232))

// 배열의 모든 순열 출력하기
function swap(strArr, index1, index2) {
    let temp = strArr[index1]
    strArr[index1] = strArr[index2]
    strArr[index2] = temp
}

function permute(strArr, begin, end) {
    if (begin == end) {
        console.log(strArr)
    } else {
        for(let i = begin; i < end + 1; i++) { // 0이면 => 1이면
            swap(strArr, begin, i); // 1)0과 0을 swap(ACD) => 3)1과 2의 값을 swap (ADC) => 7) 
            permute(strArr, begin + 1, end) // 2)1과 2를 재귀 => 4)2와 2를 재귀 => ADC 출력
            swap(strArr, begin, i) // 5)2와 0을 swap(CAD) => 6)한 바퀴 끝
        }
    }
}

function permuteArr(strArr) {
    permute(strArr, 0, strArr.length - 1)
}

permuteArr(['A','C','D'])

// 유튜브 코드구현
function permuteYoutube(arr) {
    const result = []

    // DFS
    const dfs = (i, arr) => {
        // base condition
        if (i === arr.length) {
            return result.push([...arr])
        }

        for (let j = i; j < arr.length; j++) {
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]] 
            // dfs
            dfs(i + 1, arr)
            // swap back to the original order
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    dfs(0, arr)
    return result;
}

console.log(permuteYoutube(['a', 'b', 'c']))

// 시간 복잡도 : O(n!), 공간 복잡도 : O(n!) n!개의 호출스택이 생성