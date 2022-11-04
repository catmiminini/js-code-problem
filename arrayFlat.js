// 1. Array.prototype.flat
const flatArray = array.flat(Infinity)

// 2. 实现外部flatten方法
function flatten(arr) {
  const result = []
  for (let i = 0; i <= arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

// 3. 实现数组的flat方法
Array.prototype.flat = function (depth) {
  if (!Array.isArray(this) || depth <= 0) {
    return this
  }
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(cur.flat(depth - 1))
    } else {
      return prev.concat(cur)
    }
  }, [])
}
