function bigNumberSum(a, b) {
  let res = []
  let tmp = 0;
  
  a = a.split('')
  b = b.split('')

  while(a.length || b.length || tmp) {
    tmp = +a.pop() + +b.pop() + tmp;
    res.unshift(tmp % 10);
    tmp = tmp > 9 ? 1 : 0;
  }

  return res.join('')
}