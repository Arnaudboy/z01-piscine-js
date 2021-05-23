const adder = (arr, start=0) => {return arr.reduce((accumulator, currentValue) => accumulator + currentValue, start)}
const sumOrMul = (arr, start=0) => {return arr.reduce((accumulator, currentValue) => currentValue%2==0 ? accumulator * currentValue : accumulator + currentValue, start)}
const funcExec = (arr, x) => {return arr.reduce((accumulator, currentValue) =>  currentValue(accumulator),x)}