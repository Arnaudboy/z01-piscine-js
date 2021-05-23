function reverse(obj) {
    if(typeof obj === "string"){
        let str = ''
        for(let i=obj.length-1; i>=0; i--){
            str += obj[i]
        }
        return str
    } else {
        let arr = []
        for(let i=obj.length-1; i>=0; i--) {
            arr.push(obj[i])
        }
        return arr
    }
}
