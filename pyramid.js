function pyramid(char, n) {

    let returnstr = ' '.repeat((n-1)*char.length)+char
    if(n>1){
        returnstr += '\n'
    }
    for(let i=1; i<n; i++){

        returnstr += ' '.repeat((n-i-1)*char.length)+char.repeat((2*i)+1)    

        if(i==n-1) {
            return returnstr
        }
        returnstr += "\n"
    }
    return returnstr
}

//console.log(pyramid('aa', 5))
// console.log("           ".length)
//console.log("   ".length)