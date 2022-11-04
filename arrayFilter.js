Array.prototype.filter = function (filterFn) {
  if(typeof filterFn !== 'function') throw new TypeError('filterFn is not a function')
  const result = []
  for (let i = 0; i < this.length; i++) {
    if (filterFn(this[i])) result.push(this[i])
  }
  return result
}
