Page({

  /**
   * 页面的初始数据
   */
  data: {
    productInfo: {},
    number: 1,
    cartItemsCount: 0,
    cartItems: [],
    productExist: false
  },

  onClickAddCart() {
    const that = this
    // 获取商品信息
    const productInfo = this.data.productInfo
    // 获取商品数量
    const number = this.data.number
    // 获取缓存中购物车信息
    let cartItems = wx.getStorageSync('cartItems') || []
    console.log(cartItems, '购物车信息')
     //判断购物车缓存中是否已存在该货品
     const exist = cartItems.find( ele => {
      return ele.id === productInfo.id
    })
    console.log(exist, '是否存在')
    if (exist) {
      //如果存在
      that.setData({
        productExist: true
      })
      return;
    } else {
      //如果不存在，传入该货品信息
      cartItems.push({
        ...productInfo,
        number
      })
    }
    //加入购物车数据，存入缓存
    wx.setStorage({
      key: 'cartItems',
      data: cartItems,
      success: function (res) {
        //添加购物车的消息提示框
        wx.showToast({
          title: "加入购物车成功!",
          icon: "success",
          mask: true,
        })
        that.setData({
          cartItems:cartItems
        })
      }
    })
  },

  getProductInfo(id) {
    wx.cloud.database().collection("product").where({
      id: parseInt(id)
    }).get().then(res => {
      console.log(res)
      this.setData({
        productInfo: res.data[0]
      })
    }) 
  },

  onCountChange(e) {
    this.setData({
      number: e.detail
    })
  },

  onClickCart() {
    wx.switchTab({
      url: '/pages/cart/index'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getProductInfo(options.id)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const cartItems = wx.getStorageSync('cartItems') || []
    this.setData({
      cartItems: cartItems
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})