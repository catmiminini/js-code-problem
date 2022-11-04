function uniqueArray(arr) {
  return Array.from(new Set(arr))
}

function uniqueArray(arr) {
  const map = {}
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (map.hasOwnProperty(arr[i])) continue
    else {
      map[arr[i]] = 1
      result.push(map[key])
    }
  }
  return result
}
