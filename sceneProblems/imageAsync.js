function imageAsync (url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => {
      console.log('图片请求成功');
      resolve(image)
    }
    img.onerror = (err) => {
      console.log('失败')
      reject(err)
    }
    img.src = url;
  })
}

imageAsync('url').then(image=>{
  console.log(image)
}).catch(err => {
  console.log(err)
})