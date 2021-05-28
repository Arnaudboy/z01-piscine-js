function deepCopy(obj){
    console.log(obj)
    if(Array.isArray(obj)){return copyArray(obj)}
    else {return copyObject(obj)}
}

const copyArray = input => {
    let arr = []
    for(let i = 0; i < input.length; i++){
        if(Array.isArray(input[i])){copyArray(input[i])}
        arr[i] = input[i]
    }
    console.log(arr)
    return arr
}
const copyObject = input => {
    let res = {}
    for(const [key, value] of Object.entries(input)){
        res[key] = value
    }
    return res
}