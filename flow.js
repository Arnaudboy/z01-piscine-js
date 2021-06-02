function flow(funcs) {
    const length = funcs.length

    return function(...args) {
      let index = 0
      let result = length ? funcs[index].apply(this, args) : args[0]
      while (++index < length) {
        result = funcs[index].call(this, result)
      }
      return result
    }
  }

  // const flow = callbacks => (...args) => {
  //   let output = callbacks[0].apply(this, args)
  //   for (let i = 1 ; i < callbacks.length ; i++) {
  //     output = callbacks[i](output)
  //   }
  //   return output
  // }