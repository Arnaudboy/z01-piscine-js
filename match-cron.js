function matchCron(cron, date) {
    const arr = cron.split(' ')
    const arr2 = [date.getMinutes(), date.getHours(), date.getDate(), date.getMonth()+1, date.getDay()]
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!="*" && Number(arr[i]) != arr2[i]){
            return false
        }
    }
    return true
}

// console.log(matchCron('* * * * 1', new Date('2020-06-01T00:00:00')))
// console.log( matchCron('* * * 2 *', new Date('2021-02-01T00:00:00')))
// console.log(matchCron('* * 9 * *', new Date('2020-06-09T00:00:00')))
// console.log(matchCron('* 3 * * *', new Date('2020-05-31T03:00:00')))
// console.log( matchCron('1 * * * *', new Date('2020-05-30T19:01:00')))
// console.log( matchCron('3 3 * 3 3', new Date('2021-03-03T03:03:00')))
// console.log( matchCron('* * * * *', new Date()))

// console.log( !matchCron('* * * * 1', new Date('2020-06-02T00:00:00')))
// console.log( !matchCron('* * * 2 *', new Date('2021-03-01T00:00:00')))
// console.log(!matchCron('* * 8 * *', new Date('2020-06-09T00:00:00')))
// console.log( !matchCron('* 2 * * *', new Date('2020-05-31T03:00:00')))
// console.log( !matchCron('1 * * * *', new Date('2020-05-30T19:00:00')))
// console.log(!matchCron('3 3 * 3 3', new Date('2021-03-02T03:03:00')))