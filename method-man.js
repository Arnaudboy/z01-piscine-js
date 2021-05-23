const words = (str) => {return str.split(' ')};
const sentence = (arr) => {return arr.join(' ')};
const yell = (str) => {return str.toUpperCase()};
const whisper = (str) => {return "*"+str.toLowerCase()+"*"};
const capitalize = (str) => { 
    let arr =""
    for (let i = 0; i<str.length; i++) {
        if (i == 0) { 
            arr += str[i].toUpperCase()
            continue;
        }
        arr += str[i].toLowerCase()
    }
    return arr
    
}

//const capitalize = (str) => {return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))};