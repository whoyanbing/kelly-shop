const computedBehavior = require('miniprogram-computed')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productList: {
      type: Array,
      value: []
    }
  },

  // 引入计算属性
  behaviors: [computedBehavior],

  // computed: {
  //   totalPrice(data) {
  //     const productList = data.productList
  //     let totalPrice = 0
  //     productList.forEach(item => {
  //       totalPrice = item.price * item.number + totalPrice
  //     });
  //     return totalPrice
  //   },
  // },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

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
      }  
    },

  },

  //组件生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log(this.data.totalPrice, 'attached')  
    },
  },

})
