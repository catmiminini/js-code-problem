function repeat(s, n) {
  return Array(n + 1).join(s);
}

function repeat(s, n) {
  return (n > 0) ? s.concat(repeat(s, --n)) : ''
}

String.prototype.repeat = function (n) {
  if(n < 0) return ''
  return Array(n + 1).join(this)
}