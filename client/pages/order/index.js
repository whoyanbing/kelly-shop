Page({
    /**
     * 页面的初始数据
     */
    data: {

    },

    bindAddAddress() {
        wx.getSetting({
            success(res) {
                if (res.authSetting['scope.address']) {
                    console.log("111")
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

                } else {
                    if (res.authSetting['scope.address'] == false) {
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

    getUserAddress() {
        const userAddress = wx.getStorageSync('userAddress') || null;
        this.setData({
            userAddress: userAddress
        })
    },

    onSubmit() {
        wx.navigateTo({
            url: '/pages/orderList/index',
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        this.getUserAddress()
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