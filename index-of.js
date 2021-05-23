function indexOf(arr, value, fromIndex=0) {
    for(let i=fromIndex; i<arr.length; i++) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
function lastIndexOf(arr, value, fromIndex=(arr.length-1)) {
    for(let i=fromIndex; i>=0; i--) {
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
function includes(arr, value) {
    for(let i=0; i<arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
}

// const bigArray = [...Array(999).keys(), ...Array(999).keys()]
// const t = (f) => tests.push(f)
// console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 1)
// console.log(indexOf([0, 0, t, t], t) === 2)
// console.log(indexOf([t, 0, 0, t], t, 1) === 3)
// console.log(indexOf([t, 0, 0, t], t, 0) === 0)
//t(({ ctx }) => console.log(indexOf(bigArray, ctx.rn) === ctx.rn)
//t(({ ctx }) => console.log(indexOf(bigArray, {}) === -1)

// console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2) === 7)
// console.log(lastIndexOf([0, 0, t, t], t) === 3)
// console.log(lastIndexOf([0, 0, t, t], t, 3) === 3)
// console.log(lastIndexOf([t, 0, 0, t], t, 2) === 0)
// console.log(lastIndexOf(bigArray, ctx.rn) === ctx.rn + 999)
// console.log(lastIndexOf(bigArray, {}) === -1)

// console.log(includes([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))
// console.log(includes([0, 0, t, t], t))
// console.log(includes(bigArray, ctx.rn))
// console.log(!includes(bigArray, {}))
