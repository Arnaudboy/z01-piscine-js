function filterShortStateName(arr) {
    return arr.filter(index => index.length < 7)
}

function filterStartVowel(arr) {
    return arr.filter(index => /^[AEIOUaeiou]/.test(index))
}

function filter5Vowels(arr) {
    return arr.filter(index => {if (index.match(/[aeiou]/gi).length >= 5 ) {return index}})
}

function filter1DistinctVowel(arr) {
    return arr.filter(index => index.toLowerCase().match(/[aeiou]/gi).every(element => element === index.toLowerCase().match(/[aeiou]/gi)[0]) )
}

function multiFilter(arr) {
    return arr.filter(index => index.capital.length>7 && !index.name[0].match(/^[aeiou]/i) && index.tag.match(/[aeiou]/i) && index.region != 'South')
}
