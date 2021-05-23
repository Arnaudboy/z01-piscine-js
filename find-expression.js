// const add4 = '+4'
// const mul2 = '*2'
function findExpression(num, result=1, str="1") {
    if (result > num) return undefined
    if (num === result) return str
    return ((num-result)%4 != 0) ? findExpression(num, result*2, str+=` ${mul2}`) : findExpression(num, result+4, str+=` ${add4}`)
}

// console.log(findExpression(8), 8)
// console.log(findExpression(14), 14)
// console.log(findExpression(60), 60)
// console.log(findExpression(100), 100)
// console.log(findExpression(100), 100)
// console.log(findExpression(280), 280)
// console.log(findExpression(110), 110)
// console.log(findExpression(144), 144)
// console.log(findExpression(200), 200)
// console.log((findExpression(104)), 104)

// console.log(findExpression(7), undefined)
// console.log(findExpression(63), undefined)
// console.log(findExpression(23), undefined)
// console.log(findExpression(103), undefined)