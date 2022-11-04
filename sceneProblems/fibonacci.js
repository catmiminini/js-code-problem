function fibonacci(n) {
  if(n === 0) return 0;
  if (n === 1) return 1;

  let f0 = 0;
  let f1 = 1;
  let tmp;
  for(let i = 2; i <= n; i ++) {
    tmp = f1;
    f1 = f1 + f0;
    f0 = tmp;
  }
  return f1;
}

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))
console.log(fibonacci(8))
console.log(fibonacci(9))
console.log(fibonacci(10))