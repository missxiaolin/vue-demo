import wx from 'weixin-js-sdk'
import { wxConfig } from 'api/wxConfig'

export class WxConfig {
  static getInstance () {
    if (!WxConfig.instance) {
      WxConfig.instance = new WxConfig()
    }
    return WxConfig.instance
  }

  constructor (config) {
    let self = this
    wxConfig({ url: location.href.split('#')[0] }).then(res => { // 获得签名配置
      // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作
      wx.config(res.data.model)
    })
    wx.ready(function () {
      self.wx = wx
    })
  }

  // 分享给好友
  shareFriend (config) {
    wx.ready(function () {
      // 分享给朋友  ,在config里面填写需要使用的JS接口列表，然后这个方法才可以用
      wx.onMenuShareAppMessage({
        title: config.title, // 分享标题
        desc: config.desc, // 分享描述
        link: config.link, // 分享链接
        imgUrl: config.imgUrl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
        },
        cancel: function () {
        }
      })
    })
  }

  // 分享朋友圈
  sharefriends (config) {
    wx.ready(function () {
      wx.onMenuShareTimeline({
        title: config.title, // 分享标题
        link: config.link,
        imgUrl: config.imgUrl, // 分享图标
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      })
    })
  }
}
