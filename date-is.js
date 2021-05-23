function isValid(date) {return isNaN(date) || date == 0 ? false : true }
function isAfter(date1,date2){return date1-date2 < 0 || !isValid(date1) || !isValid(date2) ? false : true}
function isBefore(date1,date2){return isValid(date1) && isValid(date2) && !isAfter(date1,date2)}
function isFuture(date1){return isValid(date1) && isAfter(date1,Date.now())}
function isPast(date1){return isValid(date1) && !isFuture(date1)}

// const invalid = (callback, ary = 1) => {
//     for (const s of [
//       `new Date('')`,
//       `new Date(NaN)`,
//       `''`,
//       `'2013-01-01'`,
//       `NaN`,
//     ]) {
//       if (callback(...Array(ary).fill(eval(s)))) {
//         throw Error(`${callback.name}(${s}) should be false`)
//       }
//     }
//   }
// console.log(!invalid(isBefore, 2))
// console.log(!isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
// console.log(!isAfter(new Date('2157-11-07'), new Date('2183-04-16')))
// console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
// console.log(isAfter(123123, 526))
// console.log(isValid(new Date()))
// console.log(isValid(Date.now()))
// console.log(isValid(new Date('December 17, 1995 03:24:00')))
// console.log(isValid(new Date(1488370835081)))
// console.log(isValid(new Date('1995-12-17T03:24:00')))
// console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))
