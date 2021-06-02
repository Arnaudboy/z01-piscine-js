async function getJSON(path, params) {
    let res = path+"?"
    for(let [key, value] of Object.entries(params)) {
        if(typeof value === "string") res+=key+"="+value.replace(/\s/g, '+')+"&"
        else res+=key+"="+value+"&"
    }
    res = res.slice(0,-1)
    try {
        const response = await fetch(res, {
            method: "GET",
        })
        const responseData = await response.json()
        if(!response.ok) throw new Error(response.statusText)
        if(responseData.error) throw new Error(responseData.error)
        return responseData.data
    }
    catch (err) {
        throw err
    }
}
