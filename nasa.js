function nasa(n) {
    let returnstr = '1 ';
    for (let i=2; i<=n; i++) {
        if(i%3==0 && i%5==0) {
            returnstr += "NASA ";
            continue;
        } else if(i%3==0) {
            returnstr += "NA "
            continue;
        } else if(i%5==0) {
            returnstr += "SA "
            continue;
        }
        returnstr += i+" "
    }
    return returnstr.trim()
}

//console.log(nasa(15), '1 2 NA 4 SA NA 7 8 NA SA 11 NA 13 14 NASA')