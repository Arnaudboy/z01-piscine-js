function RNA(str) {
    let returnstr = '';
    if (str == ''){
        return ''
    }
    for(const letter of str){
        switch(letter){
            case 'G':
                returnstr += 'C';
                break;
            case 'C':
                returnstr += 'G';
                break;
            case 'T':
                returnstr += 'A';
                break;
            case 'A':
                returnstr += 'U';
                break;
        }
    }
    return returnstr;
}

function DNA(str) {
    let returnstr = '';
    if (str == ''){
        return ''
    }
    for(const letter of str){
        switch(letter){
            case 'C':
                returnstr += 'G';
                break;
            case 'G':
                returnstr += 'C';
                break;
            case 'A':
                returnstr += 'T';
                break;
            case 'U':
                returnstr += 'A';
                break;
        }
    }
    return returnstr;
}

// console.log(RNA(''), '')
// console.log(RNA('TAGC'), 'AUCG')
// console.log(RNA(DNA('AUCG')), 'AUCG')

// console.log(DNA(''), '')
// console.log(DNA('AUCG'), 'TAGC')
// console.log(DNA(RNA('TAGC')), 'TAGC')
