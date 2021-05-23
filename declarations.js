const escapeStr = "/\'\"\`\'\\"
const arr = [4, '2']
const obj = {
    str : "coucou",
    num : 4,
    bool : false,
    undef : undefined
}
const nested = {arr: [4, undefined, '2'], obj: obj}

Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);