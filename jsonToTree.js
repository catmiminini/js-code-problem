function jsonToTree(data) {
  let result = [];
  if(!Array.isArray(data)){
    return result
  }

  let map = new WeakMap();
  data.forEach(item => {
    map.set(item.id) = item;
  })
  data.forEach(item => {
    let parent = map.get(item.pid);
    if(parent) {
      (parent.children || (parent.children = [])).push(item)
    } else {
      result.push(item);
    }
  })
  return result;
}