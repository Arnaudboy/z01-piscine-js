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
    dataset.forEach(element => data.push(element.split('-')))
    data = data.flat()
    let arr = []
    data.forEach(index => arr.push(String(index.split(': ')).trim()))
    //console.log(arr)
    arr.forEach((element, index) => {
        element = element.split(',');
        let key = element[0].toLowerCase()
        if(res[key]=== undefined && index%2===0){
            let key2 = element[1].replace(/\s/g, '_').replace('!', '')
            let obj = {}
            let obj2 = {}
            obj2[key.substring(0, key.length - 1)] = element[1]
            obj2[arr[index+1].toLowerCase().split(",")[0]+'s'] = [arr[index+1].split(",")[1]]
            obj[key2] = obj2
            res[key] = obj
        }
        else if (index%2===1){
            key = arr[index-1].toLowerCase().split(',')[0]
            let key2 = arr[index-1].toLowerCase().split(',')[1].replace(/\s/g, '_').replace('!', '')
            let key3 = element[0].toLowerCase()+'s'
            if(!res[key][key2][key3].includes(element[1])){res[key][key2][key3].push(element[1])}
            //console.log(res[key][key2][key3])
        }
    })
    //console.log("gkhljl")
    return res
    
}