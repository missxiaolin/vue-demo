import wx from 'weixin-js-sdk'

export class WxConfig {
  static getInstance () {
    if (!WxConfig.instance) {
      WxConfig.instance = new WxConfig()
    }
    return WxConfig.instance
  }

  constructor (config) {
    let self = this
    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: config.appId, // 必填，公众号的唯一标识
      timestamp: config.timestamp, // 必填，生成签名的时间戳
      nonceStr: config.nonceStr, // 必填，生成签名的随机串
      signature: config.signature, // 必填，签名，见附录1
      jsApiList: [] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    this.wx.ready(function () {
      self.wx = wx
    })
  }

  // 分享给好友
  shareFriend (lint, title, connet, img, type = 'link', dataUrl = '') {
    // 分享给朋友  ,在config里面填写需要使用的JS接口列表，然后这个方法才可以用
    this.wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: connet, // 分享描述
      link: lint, // 分享链接
      imgUrl: img, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }

    })
  }

  // 分享朋友圈
  sharefriends (lint, title, img) {
    this.wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: lint,
      imgUrl: img, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    })
  }
}
