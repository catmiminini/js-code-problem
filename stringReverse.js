String.prototype._reverse = function() {
  return this.split('').reverse().join('');
}

console.log('asdfghjkl'._reverse())