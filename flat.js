function flat(arr, depth=0) {
    let returnarr = [];
    let lvl = 0
    while(arr.length) {
        const next = arr.shift()
        if(Array.isArray(next) && lvl <= depth){
            arr.push(...next)
            lvl+=1;
        } else {
            returnarr.push(next)
        }
    }
    return returnarr
}

// console.log(flat([1]), [1])
// console.log(flat([1, [2]]), [1, 2])
// console.log(flat([1, [2, [3]]]), [1, 2, [3]])
// console.log(flat([1, [2, [3], [4, [5]]]], 2), [1, 2, 3, 4, [5]])
// console.log(flat([1, [2, [3], [4, [5]]]], 3), [1, 2, 3, 4, 5])
