const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const extendedMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const extendedDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
function format(date, format) {
    const match =  format.match(/[yGMdEhmsHa]{1,4}/g)
    match.forEach( element => {
        const rep = (str) => format = format.replace(element, str);
        switch (element) {
            case 'y' : rep(Math.abs(date.getFullYear())); break;
            case 'yyyy': 
                let tmp = "";
                for (let i = 0; i<4-Math.abs(date.getFullYear()).toString().length; i++) {tmp += "0"}
                rep(tmp+Math.abs(date.getFullYear()).toString()); break;
            case 'G' :  rep(date.getFullYear() < 0 ? "BC" : "AD"); break;
            case 'GGGG' :  rep(date.getFullYear() < 0 ? "Before Christ" : "Anno Domini"); break;
            case 'M' : rep(date.getMonth()+1); break;
            case 'MM' : rep(date.getMonth() < 10 ? "0"+( date.getMonth()+1) : (date.getMonth()+1)); break;
            case 'MMM' : rep(month[date.getMonth()]); break;
            case 'MMMM' : rep(extendedMonth[date.getMonth()]); break;
            case 'd' : rep(date.getDate()); break;
            case 'dd' : rep(date.getDate() < 10 ? "0"+( date.getDate()) : (date.getDate())); break;
            case 'E' : rep(day[date.getDay()]); break;
            case 'EEEE' : rep(extendedDay[date.getDay()]); break;
            case 'H' : rep(date.getHours()); break;
            case 'HH' : rep(date.getHours()<10 ? "0"+ date.getHours() : date.getHours()); break;
            case 'h' : rep(date.getHours()%12); break;
            case 'hh' : rep(date.getHours()%12<10 ? "0"+ date.getHours()%12 : date.getHours()%12); break;
            case 'm' : rep(date.getMinutes()); break;
            case 'mm' : rep(date.getMinutes()<10 ? "0"+ date.getMinutes() : date.getMinutes()); break;
            case 's' : rep(date.getSeconds()); break;
            case 'ss' : rep(date.getSeconds()<10 ? "0"+ date.getSeconds() : date.getSeconds()); break;
            case 'a' : rep(date.getHours()<12 ? "AM" : "PM"); break;
        }
    })
    return format;
    }


// const landing = new Date('July 20, 1969, 20:17:40')
// const returning = new Date('July 21, 1969, 17:54:12')
// const eclipse = new Date(-585, 4, 28)
// const ending = new Date('2 September 1945, 9:02:14')

// year
// console.log(format(eclipse, 'y'), '585')
// console.log(format(landing, 'y'), '1969')
// console.log(format(eclipse, 'yyyy'), '0585')
// console.log(format(landing, 'yyyy'), '1969')
// console.log(format(eclipse, 'yyyy G'), '0585 BC')
// console.log(format(landing, 'yyyy G'), '1969 AD')
// console.log(format(eclipse, 'yyyy GGGG'), '0585 Before Christ')
// console.log(format(landing, 'yyyy GGGG'), '1969 Anno Domini')

// month
// console.log(format(eclipse, 'M'), '5')
// console.log(format(eclipse, 'MM'), '05')
// console.log(format(eclipse, 'MMM'), 'May')
// console.log(format(eclipse, 'MMMM'), 'May')
// console.log(format(landing, 'M'), '7')
// console.log(format(landing, 'MM'), '07')
// console.log(format(landing, 'MMM'), 'Jul')
// console.log(format(landing, 'MMMM'), 'July')
// console.log(format(ending, 'M'), '9')
// console.log(format(ending, 'MM'), '09')
// console.log(format(ending, 'MMM'), 'Sep')
// console.log(format(ending, 'MMMM'), 'September')

// day
// console.log(format(landing, 'd'), '20')
// console.log(format(ending, 'd'), '2')
// console.log(format(landing, 'dd'), '20')
// console.log(format(ending, 'dd'), '02')
// console.log(format(landing, 'E'), 'Sun')
// console.log(format(returning, 'E'), 'Mon')
// console.log(format(landing, 'EEEE'), 'Sunday')
// console.log(format(returning, 'EEEE'), 'Monday')

// time
// console.log(format(landing, 'H:m:s'), '20:17:40')
// console.log(format(landing, 'HH:mm:ss'), '20:17:40')
// console.log(format(landing, 'h:m:s a'), '8:17:40 PM')
// console.log(format(landing, 'hh:mm:ss a'), '08:17:40 PM')
// console.log(format(returning, 'H:m:s'), '17:54:12')
// console.log(format(returning, 'HH:mm:ss'), '17:54:12')
// console.log(format(returning, 'h:m:s a'), '5:54:12 PM')
// console.log(format(returning, 'hh:mm:ss a'), '05:54:12 PM')
// console.log(format(ending, 'H:m:s'), '9:2:14')
// console.log(format(ending, 'HH:mm:ss'), '09:02:14')
// console.log(format(ending, 'h:m:s a'), '9:2:14 AM')
// console.log(format(ending, 'hh:mm:ss a'), '09:02:14 AM')

// mix
// console.log(format(ending, 'HH(mm)ss [dd] <MMM>'), '09(02)14 [02] <Sep>')
// console.log(format(ending, 'dd/MM/yyyy'), '02/09/1945')