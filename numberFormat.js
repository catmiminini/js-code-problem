// 数字每千分位用逗号隔开

// 利用number的toLocaleString() 方法处理
function format(num) {
  return num.toLocaleString();
} 


// 正则作法1
function format(num) {
  const numStr = num.toString()
  const [int, fraction] = numStr.split('.')
  return (
    // 整数部分的另一种写法
    // int.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    int.replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (fraction ? '.' + fraction : '')
  )
}
// 
function toThousands(num) {
  var numStr = (num || 0).toString();
   return numStr.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}


console.log(format(123456789.123456))
console.log(format(123456789))

console.log(toThousands(123456789.123456))
console.log(toThousands(123456789))
