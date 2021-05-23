function bloodySunday(date){
    const day0 = new Date('0001-01-01')
    let numberOfWeek = (date-day0)/(60*60*24*7*1000)
    const index = (date.getDay() + Math.floor(numberOfWeek%6))%6
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return index == 0 ? days[date.getDay()] === 'Sunday' ? 'Monday' : days[date.getDay()] : days[index]
}

// console.log( bloodySunday(new Date('0001-01-01')) === 'Monday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-01-02')) === 'Tuesday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-01-03')) === 'Wednesday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-01-04')) === 'Thursday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-01-05')) === 'Friday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-01-06')) === 'Saturday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-01-07')) === 'Monday')
// console.log("======================================")
// console.log( bloodySunday(new Date('0001-12-01')) === 'Friday')
// console.log("======================================")
// console.log( bloodySunday(new Date('1664-08-09')) === 'Saturday')
// console.log("======================================")
// console.log( bloodySunday(new Date('2020-01-01')) === 'Monday')
// console.log("======================================")
// console.log( bloodySunday(new Date('2048-12-08')) === 'Thursday')


// 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
// 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' - 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'


//function bloodySunday(date){
    //     const day0 = new Date('0001-01-01')
    //     let numberOfWeek = (date-day0)/(60*60*24*7*1000)
    //     let seconds = numberOfWeek*60*60*24
    //     let day = date.getDay()
    //     console.log(day)
    //     const c = ((numberOfWeek%1)*100)/100
    //     console.log(Math.floor(Math.abs(c*7)))
    //     //console.log((((day-numberOfWeek)%7)-7)%7)
    //     const index = (7 - ((day-numberOfWeek)%7))%7
    //     // console.log(date)
    //     // date.setSeconds(date.getSeconds()-seconds)
    //     // console.log(date)
    //     //console.log(index)
        
    //     const days = ['Monday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']//['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Monday'];
    //     // for (let index = 0; index < numberOfWeek; index++) {
    //     //     const element = days[index];
            
    //     // }
    //     return days[index]
    // }