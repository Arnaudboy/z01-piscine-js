async function series(arr) {
    if(arr.length === 0) return []
    let res = [];
    for(let i = 0; i < arr.length; i++){
        res.push(await arr[i]());
    }
    return res
}
