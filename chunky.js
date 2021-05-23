function chunk(arr, size) {
    let newarr = [];
    if(arr.length%size === 0){
        for(let i=0; i<=(arr.length-size); i+=size){
            let temparr = []
            for(let j=i; j<i+size; j++){              
                temparr.push(arr[j])
            }
            newarr.push(temparr);
            temparr = [];        
        }
        return newarr;
    } else {
        for(let i=0; i<(arr.length-(arr.length%size)); i+=size){
            let temparr = []
            for(let j=i; j<i+size; j++){
                temparr.push(arr[j])
            }
            newarr.push(temparr);
            temparr = [];  
        }
        let temparr = []
        for(let i=newarr.flat().length; i<(arr.length);i++) {
            temparr.push(arr[i])
        }
        newarr.push(temparr);
        return newarr;
    }
}

//console.log(chunk(['a', 'b', 'c', 'd'], 2)===[['a', 'b'], ['c', 'd']])
//console.log(chunk(['a', 'b', 'c', 'd'], 3) , [['a', 'b', 'c'], ['d']])
