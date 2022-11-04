// 基于时间戳的节流
function throttle(fn, delay) {
  let curTime = Date.now()
  return function () {
    let context = this,
      args = arguments,
      nowTime = Date.now()
    if (nowTime - curTime >= delay) {
      curTime = Date.now()
      return fn.apply(context, args)
    }
  }
}

// 基于标志的节流: 由于timeout可能会有小问题
function throttle(fn, delay) {
  let flag = false
  return function () {
    if (!flag) {
      flag = true
      setTimeout(() => {
        flag = false
      }, delay)
      return fn.apply(this, arguments)
    }
  }
}
