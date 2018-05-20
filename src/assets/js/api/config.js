import fetch from '@/assets/js/fetch'

// 获取验证码
export function getConfig (data) {
  return fetch({
    url: '/wechat/config',
    method: 'get',
    params: data
  })
}
