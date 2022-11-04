function add(...outArgs) {
  let outSum = outArgs.reduce((res, a) => res + a, 0)
  function chain(...innerArgs) {
    let innerSum = innerArgs.reduce((res, a) => res + a, outSum)
    return add(innerSum)
  }

  // console.log(outSum)
  chain.toString = function () {
    return outSum
  }
  chain.value = outSum

  return chain
}

console.log(add(1).value)
console.log(add(1, 2)(3)(4).value)
console.log(add(1, 2)(3, 4).value)
console.log(add(1, 2)(3, 4)(5, 6).value)


// 通用curry实现
function add(...args) {
  return args.reduce((r, a) => r + a, 0)
}
function curry(fn) {
  let args = []
  return function temp(...newArgs) {
    if(newArgs.length) {
      args = [...args, ...newArgs]
      return temp;
    }
    else {
      let v = fn.apply(this, args);
      args = [];
      return v
    }
  }
}

let addCurry = curry(add)
console.log(addCurry(1)(2)(3)(4, 5)())  //15
console.log(addCurry(1)(2)(3, 4, 5)())  //15
console.log(addCurry(1)(2, 3, 4, 5)())  //15

