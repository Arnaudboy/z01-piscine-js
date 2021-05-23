const longWords = (arr) => {return arr.every((word) => word.length>=5)}
const oneLongWord = (arr) => {return arr.some((word) => word.length>=10)}
const noLongWords = (arr) => {return arr.every((word) => word.length<7)}