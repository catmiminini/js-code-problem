function _new() {
  const Constructor = Array.prototype.shift.apply(arguments)

  if (typeof Constructor !== 'function')
    throw new TypeError(`${Constructor} is not a Constructor function.`)

  let obj = Object.create(Constructor.prototype)
  let res = Constructor.apply(obj, arguments)
  let flag = res && (typeof res === 'object' || typeof res === 'function')
  return flag ? res : obj
}
