function dateFormat(dateInput, format) {
  const day = dateInput.getDate()
  const month = dateInput.getMonth() + 1
  const year = dateInput.getYear()
  return format.replace(/yyyy/, year).replace(/MM/, mounth).replace(/dd/, day)
}

dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd') // 2020/12/01
dateFormat(new Date('2020-04-01'), 'yyyy/MM/dd') // 2020/04/01
dateFormat(new Date('2020-04-01'), 'yyyy年MM月dd日') // 2020年04月01日
