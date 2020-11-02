Page({
  
  data: {
    productList: [],
    totalPrice: 0,
  },

  getTotalPrice(e) {
    console.log(e.detail)
    this.setData({
      totalPrice: e.detail.totalPrice,
      productList: e.detail.productList
    })
  },

  onSubmit() {
    const totalPrice = this.data.totalPrice
    wx.navigateTo({
      url: `/pages/order/index?totalPrice=${totalPrice}`
    })
    
  },

  onLoad: function() {

  },

  onShow() {

  }

});