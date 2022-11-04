// 1. JSON.stringify(): 要求对象中所有层级的属性都支持序列化反序列化, 否则会复制不完整
var newobj = JSON.parse(JSON.stringify(obj))

// 2. lodash的cloneDeep
var newobj = _.cloneDeep(obj)

// 3. 手动实现深拷贝
function cloneDeep(obj) {
  // 复制null和其他原始数据类型
  if (typeof obj !== 'object' || !obj) return obj
  let newObj = Array.isArray(obj) ? [] : obj
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === 'object' ? cloneDeep(obj[key]) : obj[key]
    }
  }
  return newObj
}

/**
 * 4. 完善的深拷贝
 * 基本类型数据是否能拷贝？
 * 键和值都是基本类型的普通对象是否能拷贝？
 * Symbol作为对象的key是否能拷贝？
 * Date和RegExp对象类型是否能拷贝？
 * Map和Set对象类型是否能拷贝？
 * Function对象类型是否能拷贝？（函数我们一般不用深拷贝）
 * 对象的原型是否能拷贝？
 * 不可枚举属性是否能拷贝？
 * 循环引用是否能拷贝？
 */
function cloneDeep(target) {
  //
  const map = new WeakMap()

  function isObject(target) {
    return (
      (typeof target === 'object' && target) || typeof target === 'function'
    )
  }

  function clone(data) {
    if (!isObject(data)) {
      return data
    }
    if ([Date, RegExp].includes(data.constructor)) {
      return new data.constructor(data)
    }
    if (typeof data === 'function') {
      return new Function('return' + data.toString())()
    }
    if (map.get(data)) {
      return exist
    }
    if (data instanceof Map) {
      const result = new Map()
      map.set(data, result)
      data.forEach((v, k) => {
        if (isObject(v)) {
          result.set(k, clone(v))
        } else {
          result.set(k, v)
        }
      })
      return result
    }
    if (data instanceof Set) {
      const result = new Set()
      map.set(data, result)
      data.forEach((v, k) => {
        if (isObject(v)) {
          result.set(k, clone(v))
        } else {
          result.set(k, v)
        }
      })
      return result
    }
    const keys = Reflect.ownKeys(data)
    const allDesc = Object.getOwnPropertyDescriptors(data)
    const result = Object.create(Object.getPrototypeOf(data), allDesc)
    map.set(data, result)
    keys.forEach((key) => {
      const val = data[key]
      if (isObject(val)) {
        result[key] = clone(val)
      } else {
        result[key] = val
      }
    })
    return result
  }

  return clone(target)
}
