// components/swiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productInfo: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showInfo: false,
    menuList: [{
      name: ''
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 显示商品信息
    onClickShow() {
      this.setData({
        showInfo: true
      })
    },
    // 隐藏商品信息
    onClickHide() {
      this.setData({
        showInfo: false
      })
    },
    // 加入收藏
    onClickLike() {
      console.log('加入收藏')
    },
    // 加入购物车
    onClickCart() {
      console.log('加入购物车')
    },
    // 去到详情页
    bindProductDetail(e) {
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/product/index?id=${id}`
      })
    }
  }
})
