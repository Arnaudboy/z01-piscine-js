async function queryServers(serverName, q) {
    let url1 = '/'+serverName + "?q="+encodeURI(q)
    let url2 = '/'+serverName + '_backup' + "?q="+encodeURI(q)
    return await Promise.race([getJSON(url1), getJSON(url2)])
}

async function gougleSearch(param) {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(reject, 80, new Error('timeout'))
    })

    const  obj = {
        web: await Promise.race([queryServers('web', param),promise]),
        image: await Promise.race([queryServers('image', param),promise]),
        video: await Promise.race([queryServers('video', param),promise])
    }
    return obj
}
