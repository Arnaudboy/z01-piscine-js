function addWeek(date) {
    const day0 = new Date('0001-01-01')
    let numberOfWeek = Math.floor((date-day0)/(60*60*24*7*1000))
    let typeWeek = numberOfWeek%2===1 && numberOfWeek>0 ? "second" : "";
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return typeWeek+days[date.getDay()]
}

function timeTravel({date, hour, minute, second}) {
    date.setHours(hour, minute, second)
    return date
}

// console.log(
//     timeTravel({
//       date: new Date('2020-05-29 23:25:22'),
//       hour: 21,
//       minute: 22,
//       second: 22,
//     }).getTime(),
//     new Date('2020-05-29 21:22:22').getTime(),
//   )

// console.log(
//     timeTravel({
//       date: new Date('2000-05-09 01:28:02'),
//       hour: 21,
//       minute: 22,
//       second: 22,
//     }).getTime(),
//     new Date('2000-05-09 21:22:22').getTime(),
//   )

// console.log(
//     timeTravel({
//       date: new Date('2018-06-04 13:01:00'),
//       hour: 10,
//       minute: 16,
//       second: 11,
//     }).getTime(),
//     new Date('2018-06-04 10:16:11').getTime(),
//   )

// console.log(
//     timeTravel({
//       date: new Date('1995-11-07 00:21:12'),
//       hour: 23,
//       minute: 12,
//       second: 18,
//     }).getTime(),
//     new Date('1995-11-07 23:12:18').getTime(),
//   )

// console.log(
//     timeTravel({
//       date: new Date('1000-09-19 06:00:00'),
//       hour: 22,
//       minute: 10,
//       second: 21,
//     }).getTime(),
//     new Date('1000-09-19 22:10:21').getTime(),
//   )

// console.log(
//     timeTravel({
//       date: new Date('1975-05-10 10:07:56'),
//       hour: 17,
//       minute: 15,
//       second: 14,
//     }).getTime(),
//     new Date('1975-05-10 17:15:14').getTime(),
//   )

// console.log(addWeek(new Date('0001-01-01')) === 'Monday')
// console.log(addWeek(new Date('0001-01-02')) === 'Tuesday')
// console.log(addWeek(new Date('0001-01-03')) === 'Wednesday')
// console.log(addWeek(new Date('0001-01-04')) === 'Thursday')
// console.log(addWeek(new Date('0001-01-05')) === 'Friday')
// console.log(addWeek(new Date('0001-01-06')) === 'Saturday')
// console.log(addWeek(new Date('0001-01-07')) === 'Sunday')
// console.log(addWeek(new Date('0001-01-08')) === 'secondMonday')
// console.log(addWeek(new Date('0001-01-09')) === 'secondTuesday')
// console.log(addWeek(new Date('0001-01-10')) === 'secondWednesday')
// console.log(addWeek(new Date('0001-01-11')) === 'secondThursday')
// console.log(addWeek(new Date('0001-01-12')) === 'secondFriday')
// console.log(addWeek(new Date('0001-01-13')) === 'secondSaturday')
// console.log(addWeek(new Date('0001-01-14')) === 'secondSunday')

// console.log(addWeek(new Date('2025-08-11')) === 'secondMonday')
// console.log(addWeek(new Date('2001-05-11')) === 'secondFriday')
// console.log(addWeek(new Date('2001-11-07')) === 'secondWednesday')
// console.log(addWeek(new Date('0001-12-01')) === 'secondSaturday')
// console.log(addWeek(new Date('1664-08-09')) === 'Saturday')
// console.log(addWeek(new Date('1995-11-07')) === 'Tuesday')
// console.log(addWeek(new Date('2020-01-01')) === 'Wednesday')
// console.log(addWeek(new Date('2048-12-07')) === 'Monday')