function slice(obj, start, end=(obj.length)){
    let st = 0
    let ed = 0
    if(start < 0){
        st = obj.length + start
    } else {
        st = start
    }
    if(end < 0){
        ed = obj.length + end
    }else {
        ed = end
    }
    if(typeof obj === "string"){
        let str = ''
        for(let i=st; i<ed; i++){
            str += obj[i]
        }
        return str
    } else {
        let arr = []
        for(let i=st; i<ed; i++) {
            arr.push(obj[i])
        }
        return arr
    }
}

// export const tests = []
// const t = (f) => tests.push(f)

// handle String
// console.log(slice('abcdef', 2) === 'cdef')
// console.log(slice('abcdef', -2) === 'ef')
// console.log(slice('abcdef', 0, 2) === 'ab')
// console.log(slice('abcdef', 0, -2) === 'abcd')
// console.log(slice('abcdef', 2, 4) === 'cd')
// console.log(slice('abcdef', -3, -1) === 'de')

// handle Array
// console.log(slice([1, 2, 3, 4, 5, 6], 2), [3, 4, 5, 6])
// console.log(slice([1, 2, 3, 4, 5, 6], -2), [5, 6])
// console.log(slice([1, 2, 3, 4, 5, 6], 0, 2), [1, 2])
// console.log(slice([1, 2, 3, 4, 5, 6], 0, -2), [1, 2, 3, 4])
// console.log(slice([1, 2, 3, 4, 5, 6], 2, 4), [3, 4])
// console.log(slice([1, 2, 3, 4, 5, 6], -3, -1), [4, 5])