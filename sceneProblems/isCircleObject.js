function isCircleObject(obj, antients) {
  for (let k in obj) {
    if (typeof obj[k] === 'object' && obj[k]) {
      return true
    } else {
      let flag = isCircleObject(obj[k], [...antients, obj])
      if (flag) break
    }
  }
  return false
}

const a = 1;
const b = {a};
const c = {b};
const o = {d:{a:3},c}
o.c.b.aa = a;

console.log(isCircleObject(o))