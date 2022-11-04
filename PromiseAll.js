function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`)
    }
    let count = promises.length
    let result = []
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i])
        .then((res) => {
          count--
          result[i] = res
          if (count === 0) resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
      resolve(3)
  }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})

