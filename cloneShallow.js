/**
 * 常规意义下的浅拷贝定义: 原始数据类型直接复制值, 引用数据类型复制内存地址
 * JS意义下的浅拷贝定义: 只要不是深拷贝, 都是js中广泛意义的浅拷贝. JS的深拷贝是要层次遍历各层级属性, 将每一层的引用类型都复制一遍, 使新老对象在堆上的内存位置也独立.
 */

// 对象复制单层属性
// 1. Object.assign
var newObj = Object.assign({} , obj)

// 2. 扩展运算符
var newObj = {...obj}

// 3. 数组浅拷贝
var newArray = arr.slice();
var newArray = arr.concat();

// 4. 手动实现浅拷贝
function cloneShallow(obj) {
  // 排除null和非对象的原始数据类型
  if(typeof obj !== 'object' || !obj) return obj;

  let newObj = Array.isArray(obj) ? [] : {}

  for(let key in obj) {
    if(obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj
}