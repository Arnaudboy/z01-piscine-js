// function neuron(dataset){
//     if(dataset.length > 0){dataset = dataset[0].split('-').flat()}
//     else{return {}}
//     dataset.forEach(index => console.log(index.split(': ')))
//     let orders = String(dataset).split(',')
//     let responses = []
//     orders.forEach(index => responses.push((index.split(': ')[1])))
//     let truc = responses[0].trim().replace(' ', '_').replace('!', '')
//     let obj = {}
//     obj[truc] = {order : responses[0].trim(), responses: [responses[1]]}
//     const res = {
//         orders : obj
    
//     }
//     return res
// }
function neuron(dataset){
    if(dataset.length===0){return {}}
    let res = {}
    let data = []
    dataset.forEach(element => {
        let tmp = element.split(/-/)
        let first = tmp.shift()
        data.push([first, tmp.join('-')])
    }) 
    data = data.flat()
    let arr = []
    data.forEach(index => arr.push(String(index.split(': ')).trim()))
    arr.forEach((element, index) => {
        element = element.split(',')
    let key = element[0].toLowerCase()
        if(res[key]=== undefined && index%2===0){
            let key2 = element[1].replace(/\s/g, '_').replace('!', '').replace('?', '')
            //key2 = key2.toLowerCase()
            //console.log(key2)
            let obj = {}
            let obj2 = {}
            obj2[key.substring(0, key.length - 1)] = element[1]
            let arr2 = arr[index+1].split(",")
            let eleminate = arr2.shift()
            obj2[arr[index+1].toLowerCase().split(",")[0]+'s'] = [arr2.join(',')]
            obj[key2.toLowerCase()] = obj2
            res[key] = obj
        }
        else if (index%2===1){
            let key1 = arr[index-1].toLowerCase().split(',')[0]
            let key2 = arr[index-1].toLowerCase().split(',')[1].replace(/\s/g, '_').replace('!', '').replace('?', '')
            let key3 = element[0].toLowerCase()+'s'
            let eleminate = element.shift()
            if(!res[key1][key2][key3].includes(element.join(','))){res[key1][key2][key3].push(element.join(','))}
        }
        else if (res[key][(element[1].replace(/\s/g, '_').replace('!', '').replace('?', '')).toLowerCase()] === undefined && index%2===0) {
            let key2 = element[1].replace(/\s/g, '_').replace('!', '').replace('?', '')
            let obj2 = {}
            obj2[key.substring(0, key.length - 1)] = element[1]
            let arr2 = arr[index+1].split(",")
            let eleminate = arr2.shift()
            obj2[arr[index+1].toLowerCase().split(",")[0]+'s'] = [arr2.join(',')]
            res[key][key2.toLowerCase()] = obj2
            // console.log(res[key][key2.toLowerCase()])
        }
    })
    // console.log("================================")
    // console.log(res)
    return res 
}