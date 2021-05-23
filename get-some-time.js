const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
// function firstDayWeek(week, year) {
//     let date = new Date(`${year}-01-01T00:00:00`)
//     date.setSeconds((week-1)*7*24*60*60);
//     const sec = week === 1 ? 0 :(date.getDay()-1)*(24*60*60)
//     date.setSeconds(date.getSeconds() - sec)
//     return `${date.toDateString().match(/\d\d/).flat()}-${month[date.getMonth()]}-${year}`
// }
function firstDayWeek(week, year) {
    if (week === 1) {return "01-01-"+year}
    let date = new Date((week-1)*7*24*60*60*1000)
    date.setFullYear(year)
    date.getDay() >= 1 ?  date.setSeconds(-((date.getDay()-1)*(60*60*24))) : date.setSeconds(-(6*(60*60*24)))
    return `${date.toDateString().match(/\d\d/).flat()}-${month[date.getMonth()]}-${year}`
}


// console.log(firstDayWeek(1, '1000'), '01-01-1000')

// console.log(firstDayWeek(52, '1000'), '22-12-1000')

// console.log(firstDayWeek(2, '0001'), '08-01-0001')

// console.log(firstDayWeek(43, '1983'), '17-10-1983')

// console.log(firstDayWeek(23, '0091'), '04-06-0091')