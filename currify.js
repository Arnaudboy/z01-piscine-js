function currify(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    }
  }

  // const currify = callback => {
  //   return function curried(...args) {
  //     return args.length >= callback.length ? callback.apply(this, args) : (...args2) => curried.apply(this, [...args, ...args2])
  //   }
  // }