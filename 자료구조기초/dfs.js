function permuteYoutube(arr) {
    let result = []

    // DFS
    const dfs = (i, arr) => {
        // base condition
        if (i === arr.length) {
            return result.push([...arr])
        }

        for (let j = i; j < arr.length; j++) {
            // swap
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            // dfs
            dfs(i + 1, arr)
            // swap back to the original order
            arr[j] = arr[i]
            arr[i] = temp
        }
    }

    dfs(0, arr)
    return result;
}
const result = permuteYoutube(['a', 'b', 'c'])
console.log(result)
