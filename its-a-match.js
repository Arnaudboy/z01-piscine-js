const normal = /hi/
const begin = /^hi/
const end = /hi$/
const beginEnd = /^hi$/


// export const tests = []
// const t = (f) => tests.push(f)

// t(() => normal.test('hi'))
// t(() => normal.test('higher'))
// t(() => !normal.test('likelihood'))
// t(() => !normal.test('Hi'))
// t(() => normal.test('I love sushi'))

// t(() => begin.test('hi'))
// t(() => begin.test('higher'))
// t(() => begin.test('hired'))
// t(() => !begin.test('likelihood'))
// t(() => !begin.test('Hi'))
// t(() => !begin.test('I love sushi'))

// t(() => end.test('hi'))
// t(() => !end.test('higher'))
// t(() => !end.test('likelihood'))
// t(() => !end.test('Hi'))
// t(() => end.test('I love sushi'))

// t(() => beginEnd.test('hi'))
// t(() => !beginEnd.test('hired kimchi'))
// t(() => !beginEnd.test('higher'))
// t(() => !beginEnd.test('likelihood'))
// t(() => !beginEnd.test('Hi'))
// t(() => !beginEnd.test('I love sushi'))

// Object.freeze(tests)
// tests.forEach(test => console.log(test))
// console.log( normal('hi'))
// console.log( normal('higher'))
// console.log( !normal('likelihood'))
// console.log( !normal('Hi'))
// console.log( normal('I love sushi'))

// console.log( begin.test('hi'))
// console.log( begin.test('higher'))
// console.log(begin.test('hired'))
// console.log( !begin.test('likelihood'))
// console.log(!begin.test('Hi'))
// console.log( !begin.test('I love sushi'))

// console.log( end.test('hi'))
// console.log( !end.test('higher'))
// console.log( !end.test('likelihood'))
// console.log( !end.test('Hi'))
// console.log( end.test('I love sushi'))

// console.log( beginEnd.test('hi'))
// console.log(!beginEnd.test('hired kimchi'))
// console.log( !beginEnd.test('higher'))
// console.log( !beginEnd.test('likelihood'))
// console.log( !beginEnd.test('Hi'))
// console.log( !beginEnd.test('I love sushi'))