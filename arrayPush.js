Array.prototype.push = function () {
  for (let i = 0; i < arguments.length; i++) {
    // this.length会在数组赋值后自动更新
    this[this.length] = arguments[i]
  }
  return this.length
}
