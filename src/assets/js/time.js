let list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}]

this.list.map(function (value, key) {
  let myDate = new Date()
  if (key === 0) {
    list[key].date = `${myDate.getMonth()}/${myDate.getDate()}`
    list[key].week = `星期${myDate.getDay()}`
  } else {
    list[key].date = `${myDate.getMonth()}/${myDate.getDate() + key}`
    let week = myDate.getDay() + key
    list[key].week = `星期${week > 7 ? week - 7 : week}`
  }
})
