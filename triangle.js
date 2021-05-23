function triangle(char, n) {
    let returnstr = '';
    for(let i=1; i<=n; i++){
        for(let j=1;j<=i; j++){
            returnstr += char
        }
        if(i==n) {
            return returnstr
        }
        returnstr += "\n"
    }
}

//console.log(triangle("$", 13))