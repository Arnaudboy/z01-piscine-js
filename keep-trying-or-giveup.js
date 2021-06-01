const retry = (count, callback, t=0) => (...args) => {
    return callback(...args).catch(() => {
        if(t>count) {throw new Error(`x:${args}`)}
        return retry(count, callback, t+=1)(...args)
    })
}

const timeout = (delay, callback) => (...args) => {
    const prom = new Promise(resolve => {
        setTimeout(resolve, delay)
    })
    return Promise.race([callback(...args), prom])
    .then((value) => {
        if(!value) throw new Error('timeout')
        else return value
    })
}