Function.prototype.mybind = function (context) {
  const fn = this
  const args = [].slice.apply(arguments, 1)
  return function () {
    return fn.apply(context, args)
  }
}