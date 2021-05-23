const isFriday = date => date.getDay() === 5 ? true : false;
const isWeekend = date => date.getDay() === 0 || date.getDay() === 6 ? true : false;
const isLeapYear = date => date.getFullYear()%4 === 0 ? true : false;
function isLastDayOfMonth(date) {
    const num = date.getDate()+1
    date.setDate(num)
    return date.getDate() === 1 ? true : false;
}

// console.log(isFriday(new Date('2014-08-29')))
// console.log( isFriday(new Date('2020-07-17')))
// console.log(!isFriday(new Date('1992-08-26')))
// console.log(!isFriday(new Date('2000-08-26')))

// // isWeekend
// console.log(isWeekend(new Date('2014-09-06')))
// console.log( isWeekend(new Date('2020-05-30')))
// console.log( !isWeekend(new Date('1929-02-13')))
// console.log( !isWeekend(new Date('1990-01-30')))

// // isLeapYear
// console.log(isLeapYear(new Date('1804-02-01')))
// console.log(isLeapYear(new Date('2008-02-01')))
// console.log( isLeapYear(new Date('2216-02-01')))
// console.log( !isLeapYear(new Date('1993-02-01')))
// console.log(!isLeapYear(new Date('1999-02-01')))

// isLastDayOfMonth
// console.log( isLastDayOfMonth(new Date('2020-02-29')))
// console.log( isLastDayOfMonth(new Date('2020-12-31')))
// console.log( isLastDayOfMonth(new Date('2019-02-28')))
// console.log( isLastDayOfMonth(new Date('1998-02-28')))
// console.log( isLastDayOfMonth(new Date('1980-02-29')))
// console.log( !isLastDayOfMonth(new Date('2020-12-30')))
// console.log( !isLastDayOfMonth(new Date('2020-02-28')))
// console.log( !isLastDayOfMonth(new Date('2019-02-29')))