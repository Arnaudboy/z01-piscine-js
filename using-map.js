function citiesOnly(arr) {
    return arr.map(obj => obj.city)
}
function upperCasingStates(arr) {
    return arr.map(str => str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())))
}

function fahrenheitToCelsius(arr) {
    return arr.map(element => element.replace(element, Math.floor((parseInt(element)-32)*5/9)+"°C"))
}

function trimTemp(arr) {
    return arr.map(obj => {
        obj.temperature = obj.temperature.replace(/\s/g, '')
        return obj
    })
}

function tempForecasts(arr) {
    return arr.map(obj => {return `${Math.floor((parseInt(obj.temperature)-32)*5/9)}°Celsius in ${obj.city}, ${obj.state.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))}`})
}