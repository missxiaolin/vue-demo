/**
 * 动态加载JS
 * @param {*} url
 * @param {*} id
 * @param {*} callback
 */
export function loadScript (url, id, callback) {
  // 如果URL不存在或者该ID已经加载过了
  if (!url || document.getElementById(id)) {
    if (typeof (callback) === 'function') {
      // eslint-disable-next-line
      callback(true)
    }
    return
  }
  var script = document.createElement('script')
  script.type = 'text/javascript'
  if (id) script.id = id
  if (typeof (callback) === 'function') {
    // 默认10S超时就立即执行回调函数
    let timer = setTimeout(function () {
      // eslint-disable-next-line
      callback(false)
      timer = null
    }, 10000)
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null
          if (timer) {
            // eslint-disable-next-line
            callback(true)
          }
        }
      }
    } else {
      script.onload = function () {
        if (timer) {
          clearTimeout(timer)
          // eslint-disable-next-line
          callback(true)
        }
      }
    }
  }
  script.src = url
  document.body.appendChild(script)
  // document.body.prepend(script)
}

/**
 * 时间戳 转 日期
 * @param {*} tdate
 */
export function datePurify (tdate) {
  var date = new Date(tdate)
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
  var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
  var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes()) + ':'
  var s = (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds())
  return Y + M + D + h + m + s
}

// 随机生成一个ID(年月日+8位随机数)
export function generateRandomId () {
  let [_date, _id] = [new Date(), '']
  _id = 'xxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16 | 0
    let v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
  _id = _date.getFullYear() + '' + (_date.getMonth() > 8 ? (_date.getMonth() + 1) : '0' + (1 + _date.getMonth())) + '' + (_date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate()) + _id
  return _id
}

/**
 * 本地存储
 * @param {*} key
 * @param {*} value
 */
export function localStorage (key, value) {
  if (arguments.length === 0) {
    console.log('没有参数')
    return
  }
  if (!window || !window.localStorage) {
    // TODO: 修改弹窗提示
    this.showDialog({dialogMsg: '您开启了秘密浏览或无痕浏览模式，请关闭!'})
    return
  }
  if (arguments.length === 1 || typeof (value) === 'undefined') {
    return window.localStorage.getItem(key)
  } else if (value === null || value === '') {
    window.localStorage.removeItem(key)
  } else if (typeof (value) === 'object') {
    window.localStorage.setItem(key, JSON.stringify(value))
  } else {
    window.localStorage.setItem(key, value)
  }
}
