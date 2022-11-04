function curry(fn, args) {
  let length = fn.length
  args = args || []

  return function () {
    let subArgs = args.slice(0)
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i])
    }
    if (subArgs.length >= length) {
      return fn.apply(this, subArgs)
    } else {
      return curry(fn, subArgs)
    }
  }
}

function curry(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args)
}
