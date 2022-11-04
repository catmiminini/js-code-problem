Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') throw new TypeError('type error')
  context = context || window
  context._fn = this
  const args = arguments[1]
  let fnStr = 'context._fn('
  for (var i = 0; i < args.length; i++) {
    fnStr += i === args.length - 1 ? args[i] : args[i] + ','
  }
  fnStr += ')'
  console.log(fnStr)
  const result = eval(fnStr)
  delete context._fn
  return result
}

var jawil = {
  name: 'jawil',
  sayHello: function (age) {
    console.log(this.name, age)
  },
}

var lulin = {
  name: 'lulin',
}

jawil.sayHello.myapply(lulin, [24, 123, 123]) //lulin 24
