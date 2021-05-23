function countLeapYears(date) {
    let countLeapYears = 0
    for(let i = 1; i <date.getFullYear(); i++) {
        if (i%4===0){countLeapYears +=1}
        if (i%100===0){countLeapYears -=1}
        if (i%400===0){countLeapYears +=1}
    }
    return countLeapYears
} 

// console.log(countLeapYears(new Date('0001-12-01')) === 0)
// console.log(countLeapYears(new Date('1664-08-09')) === 403)
// console.log(countLeapYears(new Date('2020-01-01')) === 489)
// console.log(countLeapYears(new Date('2048-12-08')) === 496)