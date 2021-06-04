async function all(object) {
    let res = {}
    for(let [key, value] of Object.entries(object)){
        res[key] = await Promise.resolve(value)
    }
    return res
}
