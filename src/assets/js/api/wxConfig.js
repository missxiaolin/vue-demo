import fetch from '@/assets/js/fetch'

export function wxConfig (data) {
  return fetch({
    url: '/wechat/config',
    method: 'get',
    params: data
  })
}
