function addScript(src) {
  const script = document.createElement('script')
  script.src = src
  script.type = 'text/javascript'
  document.body.appendChild(script)
}

addScript("http://xxx.xxx.com/xxx.js?callback=handleRes")

function handleRes(res) {
  console.log(res)
}