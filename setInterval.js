// 无需取消的重复执行器
function repeat(fn, delay) {
  setTimeout(() => {
    fn()
    repeat(fn, delay)
  }, delay)
}

// 可取消的重复执行器
function Timer() {
  this.timeID = null
}

Timer.prototype.repeat = function(func, ms) {
  this.timeID = setTimeout(() => {
    func()
    this.repeat(func, ms)
  }, ms)
}

Timer.prototype.clear = function() {
  clearTimeout(this.timeID)
}

const a = () => console.log('a')

const timer = new Timer()

timer.repeat(a, 1000)

