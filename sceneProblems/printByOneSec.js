function printAsync(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(num);
      resolve(num);
    }, 1000)
  })
}

function print(num) {
  printAsync(num).then(num => print(num < 4 ? num + 1 : 1))
}

print(1)