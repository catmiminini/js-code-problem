function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function blue() {
  console.log('blue')
}

function redTask() {
  setTimeout(() => {red(); greenTask()}, 3000)
}

function greenTask() {
  setTimeout(() => {green(); blueTask()}, 2000)
}

function blueTask() {
  setTimeout(() => {blue(); redTask()}, 1000)
}

redTask()

function task(timer, light) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(light === 'red') {
        red()
      } else if(light === 'green') {
        green()
      } else if(light === 'blue') {
        blue()
      }
      resolve()
    }, timer)
  })
}

const step = () => {
  task(3000, 'red')
  .then(() => task(2000, 'green'))
  .then(() => task(1000, 'blue'))
  .then(step)
}
const step1 = async () => {
  await task(3000, 'red');
  await task(2000, 'green');
  await task(1000, 'blue');
  step1();
}

step1();

step();