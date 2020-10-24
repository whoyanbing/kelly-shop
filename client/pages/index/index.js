// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList: [
      {id: '111',introduce: '这是介绍1',image: ['cloud://whoyanbing-zxhpb.7768-whoyanbing-zxhpb-1301101164/product/product-meat@1.png','cloud://whoyanbing-zxhpb.7768-whoyanbing-zxhpb-1301101164/product/product-meat@2.png']},
      {id: '222',introduce: '这是介绍2',image: ['cloud://whoyanbing-zxhpb.7768-whoyanbing-zxhpb-1301101164/product/product-meat@2.png']},
      {id: '333',introduce: '这是介绍3',image: ['cloud://whoyanbing-zxhpb.7768-whoyanbing-zxhpb-1301101164/product/product-meat@3.png']},
      {id: '444',introduce: '这是介绍4',image: ['cloud://whoyanbing-zxhpb.7768-whoyanbing-zxhpb-1301101164/product/product-nux@1.png']},
    ]
  },

  getBannerList() {
    const db = wx.cloud.database()
    db.collection('banner').get().then(res => {
      console.log(res) 
      if (res.errMsg == 'collection.get:ok') {
        this.setData({
          swiperList: res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBannerList()
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