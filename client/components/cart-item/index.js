const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  // 引入计算属性
  behaviors: [computedBehavior],
  // watch属性
  watch: {
    'productList': function (productList) {
      let totalPrice = 0
      if (productList.length > 0) {
        productList.forEach(item => {
          totalPrice = item.price * item.number + totalPrice
        });
      }
      this.triggerEvent('calculateTotalPrice', {
        totalPrice,
        productList
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    productList: []
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取购物车缓存数据
    getCartData() {
      let cartItems = wx.getStorageSync('cartItems') || []
      this.setData({
        productList: cartItems
      })
    },
    // 设置购物车缓存数据
    setCartData() {
      const productList = this.data.productList
      wx.setStorageSync('cartItems', productList)
    },
    // 删除购物车数据
    onClose(e) {
      let productList = this.data.productList
      const instance = e.detail.instance;
      const index = e.currentTarget.dataset.index
      productList.splice(index, 1)
      this.setData({
        productList: productList
      })
      instance.close();
    },

  },
  // 组件所在页面的生命周期
  pageLifetimes: {
    show: function () {
      // 页面被展示
      // 获取购物车数据
      this.getCartData()
    },
    hide: function () {
      // 页面被隐藏
      // 存储购物车数据
      this.setCartData()
    },
  }

})
