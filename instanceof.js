function _instanceof(instance, type) {
  if (typeof instance !== 'object' || !instance) {
    return false
  }
  if (!type || typeof type.prototype !== 'object' || !type.prototype) {
    return false
  }

  let proto = Object.getPrototypeOf(instance)
  let prototype = type.prototype

  while (true) {
    if (!proto) return false
    if (proto === prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(_instanceof({}, Object)) // true
console.log(_instanceof([], Object)) // true
console.log(_instanceof([], Array)) // true
console.log(_instanceof(123, Object)) // false
console.log(_instanceof({}, 1)) // false
console.log(_instanceof({}, null)) // false
