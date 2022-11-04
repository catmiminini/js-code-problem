function getType(value) {
  if (value == null) {
    return value + ''
  }
  if (typeof value === 'object') {
    return Object.prototype.toString
      .call(value)
      .slice(1, -1)
      .split(' ')[1]
      .toLowerCase()
  }
  return typeof value;
}

console.log(getType())
