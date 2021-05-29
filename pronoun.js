const pro = ['i', 'you', 'he', 'she', 'it', 'we', 'they']
function pronoun(str) {
    str = str.toLowerCase().replace(/(\n)/g, ' ').replace(/,/g, '').split(' ')
    let res  = {}
    for(let i=0; i<str.length; i++){
        if(pro.includes(str[i])){
            if(res[str[i]] === undefined){
                res[str[i]] = {count:1, word:[]}
                if(i!==str.length-1 && !pro.includes(str[i+1])){
                    res[str[i]].word.push(str[i+1])
                }
            } else {
                res[str[i]].count = res[str[i]].count + 1
                if(i!==str.length-1 && !pro.includes(str[i+1])){
                    res[str[i]].word.push(str[i+1])
                }
            }
        }
    }
    return res
}
