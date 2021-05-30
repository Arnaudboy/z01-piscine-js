function flags(input){
    let obj = {
        alias : {
            h: 'help'
        },
        description: ''
    }
    Object.keys(input).forEach(key => obj['alias'][key[0]] = key)
        
    if(input.help === undefined){
        for (const [key, value] of Object.entries(input)) {
            if(key != 'help'){
                if(value !== Object.values(input)[Object.values(input).length-1]) {
                        obj['description'] += `-${key[0]}, --${key}: ${value}\n`
                } else {
                        obj['description'] += `-${key[0]}, --${key}: ${value}`
                }
            } 
        }
    } else {
        for (const [key, value] of Object.entries(input).sort()) {
            if(key != 'help'){
                if(input.help.includes(key)){
                    if(key !== input.help[input.help.length-1]) {
                        obj['description'] += `-${key[0]}, --${key}: ${value}\n`
                    } else {
                        obj['description'] += `-${key[0]}, --${key}: ${value}`
                    }
                }
            }            
        }
    }
    //console.log(obj)
    return obj
}