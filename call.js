Function.prototype.mycall = function (context) {
  if (typeof this !== 'function') throw new TypeError('type error')
  context = context || window
  context._fn = this
  let args = [].slice.apply(arguments, 1)
  const fnstr = 'context._fn(' + args + ')'
  let result = eval(fnstr)
  delete context._fn
  return result
}

Function.prototype.mycall1 = function (context) {
  return this.apply([].shift.call(arguments), arguments)
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

jawil.sayHello.mycall(lulin, 24, 123, 123) //lulin 24
