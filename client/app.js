App({
  //云环境初始化
  init() {
    wx.cloud.init({
      traceUser: true,
    })
  },
  initData(e) {
    const openid = wx.getStorageSync('openid')
    if (!openid) {
      this.login(e)
    }
  },
  // 用户登录注册
  login(e) {
    const fromId = e.fromId
    wx.cloud.callFunction({
      name: 'getUserInfo',
      data: {
        fromId
      }
    }).then(res => {
      console.log(res)
      wx.setStorageSync('openid', res.result.openid)
      wx.setStorageSync('fromId', fromId)
    })
  },
  // 监听小程序启动
  onLaunch(e) {
    this.init()
    this.initData(e.query || 'o11IM0RV1JWDOWDwepaqBvhQDbq0')
  },
  globalData: {
    shoppingCart: []
  }
})