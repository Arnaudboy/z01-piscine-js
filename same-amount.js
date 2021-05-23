function sameAmount(str, reg1, reg2) {
    if (str.match(reg1)!=null && str.match(reg2) != null) {
        return str.match(new RegExp(reg1, 'g')).length === str.match(new RegExp(reg2, 'g')).length
    } else {return false}
}
