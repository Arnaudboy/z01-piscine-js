function ionOut(str) {
    let reg = str.match(/\w+t(?=ion)/g)
    return reg === null ? [] : reg
}

// console.log(ionOut('attention, direction'), ['attent', 'direct'])
// console.log(ionOut('promotion, provision'), ['promot'])
// console.log(ionOut('transfusion'), [])
// console.log(ionOut(' 1st position is the vision of the 2nd position'), [
//     'posit',
//     'posit',
//   ])
