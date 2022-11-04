Array.prototype.map = function (mapFn) {
  if (typeof mapFn !== 'function')
    throw new TypeError('mapFn is not a function')
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(mapFn(this[i]))
  }
  return res
}
