function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      throw new TypeError(`argument must be a array`)
    }
    for(let i = 0; i< promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, reject)
    }
  })
}