const vowels = /[AaEeIiOoUu]/
function vowelDots(str) {
    let returnstr = ""
    str.split('').forEach(letter => {returnstr += letter.replace(vowels, letter+".")})
    return returnstr
}
