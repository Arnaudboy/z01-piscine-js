function letterSpaceNumber(str) {
    let retstr = str.match(/\w\s\d(\b|$)/g)
    if (retstr == null ) {return []}
    else {return retstr}

}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'), ['s 8', 'r 9']),

console.log(letterSpaceNumber('I like 7up.'), [])
console.log(letterSpaceNumber("It's 20 past 3"), ['t 3'])
console.log(letterSpaceNumber('example 1, example 2'), ['e 1', 'e 2'])
console.log(letterSpaceNumber(''), [])
console.log(letterSpaceNumber('Definitely 9.'), ['y 9'])