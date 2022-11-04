function shuffle(arr) {
  let randomIndex, tmp
  for (let i = arr.length; i > 0; i--) {
    randomIndex = Math.floor(Math.round() * i)
    tmp = arr[i - 1]
    arr[i - 1] = arr[randomIndex]
    arr[randomIndex] = tmp
  }
  return arr
}
