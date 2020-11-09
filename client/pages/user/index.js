Page({
  data: {
    menuList: [{
      label: '待付款',
      icon: 'pending-payment',
    }, {
      label: '待发货',
      icon: 'tosend',
    }, {
      label: '待收货',
      icon: 'logistics',
    }, {
      label: '待评价',
      icon: 'comment-o',
    }]
  },
  bindUserAddress() {
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success(res) {
              const userAddress = {
                userName: res.userName,
                telNumber: res.telNumber,
                detailAddress: `${res.provinceName}${res.cityName}${res.countyName}${res.detailInfo}`
              }
              wx.setStorageSync("userAddress", userAddress);
              console.log(userAddress)
            }
          })

        } else {
          if (!res.authSetting['scope.address']) {
            console.log("222")
            wx.openSetting({
              success(res) {
                console.log(res.authSetting)

              }
            })
          } else {
            console.log("eee")
            wx.chooseAddress({
              success(res) {
                console.log(res.userName)
                console.log(res.postalCode)
                console.log(res.provinceName)
                console.log(res.cityName)
                console.log(res.countyName)
                console.log(res.detailInfo)
                console.log(res.nationalCode)
                console.log(res.telNumber)
              }
            })
          }
        }
      }
    })
  },
  bindUserSetting() {
    wx.openSetting({
      success(res) {
        console.log(res.authSetting)

      }
    })
  }
});
