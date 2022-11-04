let url =
  'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'
parseParam(url)

function parseParam(url) {
  const paramsStr = url.split('?')[1]
  const paramsArr = paramsStr.split('&')

  let paramsObj = {}
  paramsArr.forEach((param) => {
    let [key, val] = param.split('=')
    if (val !== undefined) {
      val = decodeURIComponent(val)
      val = /^\d+$/.test(val) ? parseFloat(val) : val
      if (paramsObj.hasOwnProperty(key)) {
        paramsObj[key] = [].concat(paramsObj[key], val)
      } else {
        paramsObj[key] = val
      }
    } else {
      paramsObj[key] = true
    }
  })

  return paramsObj
}
