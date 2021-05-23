function dayOfTheYear(date) {
    let str = ""
    for(let i = 0; i < 4 - date.getFullYear().toString().length; i++) {str +="0"}
    str += date.getFullYear().toString()+"-01-01"
    let beginingOfTheYear = new Date(str)
    return (date.getTime() - beginingOfTheYear.getTime())/(60*60*24*1000)+1
}
  
//   function dayOfTheYear(year) {
//     let dateStr = "";
//     for (var i = 0; i < 4 - year.getFullYear().toString().length; i++) {
//       dateStr += "0";
//     }
//     dateStr += year.getFullYear().toString() + "-01-01";
  
//     let first = new Date(dateStr);
//     return (year.getTime() - first.getTime()) / 86400000 + 1;
//   }
// console.log(dayOfTheYear(new Date('0001-01-01')) === 1)
// console.log(dayOfTheYear(new Date('1664-08-09')) === 222)
// console.log(dayOfTheYear(new Date('1600-12-31')) === 366)
// console.log(dayOfTheYear(new Date('2020-06-22')) === 174)
// console.log(dayOfTheYear(new Date('2048-12-08')) === 343)
// console.log(dayOfTheYear(new Date('2048-11-08')) === 313)