const arrToSet = (arr) => {
    let set = new Set
    for(let i = 0;i<arr.length;i++){
        set.add(arr[i])
    }
    return set
}

const arrToStr = (arr) => {
    let str = ''
    for(let i = 0;i<arr.length;i++){
        str += arr[i]
    }
    return str
}

function setToArr(set) {
    let arr = Array.from(set)
    return arr
}

function setToStr(set) {
    let str = ''
    for (let item of set.values()) str += item;
    return str
}

function strToArr(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    return arr;
}

const strToSet = (str) => {
    let set = new Set
    for(let i = 0;i<str.length;i++){
        set.add(str[i])
    }
    return set
}
const mapToObj = (map) => {
    let obj = {}
    for (var [key, value] of map.entries()) {
        obj[key] = value
      }
    return obj
}
const objToArr = (obj) => {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(value)
      }
    return arr
}
const objToMap = (obj) => {
    let map = new Map
    for (let key in obj) {
        map.set(key, obj[key])
      }
    return map
} 
const arrToObj = (arr) => {
    let obj = {}
    for(let i = 0;i<arr.length;i++){
        obj[i] = arr[i]
    }
    return obj
}
const strToObj = (str) => {
    let obj = {}
    for(let i = 0;i<str.length;i++){
        obj[i] = str[i]
    }
    return obj
}
const superTypeOf = (e) => {
    if (e=== null) return 'null'

  let instances = { Set, Map, Array, Function }

  for (let key in instances) {
    // console.log(key, instances[key])
    if (e instanceof instances[key]) return key
  }

  let types = { Number: 'number', String: 'string', Object: 'object' }
  for (let key in types) {
    if (typeof e=== types[key]) return key
  }

  return typeof e
}
