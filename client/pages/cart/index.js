Page({
  data: {
    status: false,
    productList: [],
    totalPrice: 0,
  },

  calculate() {
    const productList = this.data.productList
    let totalPrice = this.data.totalPrice
    productList.forEach(item => {
      console.log(item)
      totalPrice = item.price * item.number + totalPrice
    });
    console.log(totalPrice)
    this.setData({
      totalPrice: totalPrice
    })
  },

  initData() {
    let cartItems = wx.getStorageSync('cartItems') || []
    this.setData({
      productList: cartItems
    })
  },

  onClose(e) {
    let productList = this.data.productList
    const { position, instance } = e.detail;
    const index = e.currentTarget.dataset.index
    console.log(index)
    switch (position) {
      case 'right':
        productList.splice(index, 1)
        this.setData({
          productList: productList
        })
        instance.close();
        wx.setStorage({
          key: 'cartItems',
          data: productList,
          success: function (res) {
            console.log(res)
          }
        })
        break;
    }  },

  onLoad: function() {
  },

  onShow() {
    this.initData()
    this.calculate()
  }

});