Page({
  data: {
    status: false,
    productList: [
      {
        id: '1',
        price: 200,
        num: 1,
        checked: false,
        thumb:
          'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg',
      },
      {
        id: '2',
        price: 690,
        num: 1,
        checked: false,
        thumb:
          'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg',
      },
      {
        id: '3',
        price: 2680,
        num: 1,
        checked: false,
        thumb:
          'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg',
      },
    ],
    totalPrice: 0,

  },
  onLoad: function() {
    
  },

  onToggleStatus() {
    this.setData({
      status: !this.data.status
    })
  },

  onListChange(e) {
    console.log(e, 'list')
  },

  onToggleItem(e) {
    const { index } = e.currentTarget.dataset.id;
    console.log(index)
  },

  onSubmit() {
    wx.showToast({
      title: '点击结算',
      icon: 'none'
    });
  },

  onClickBtn() {
    
  }
});