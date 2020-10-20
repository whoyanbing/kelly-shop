const app = getApp();
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		categoryList: [],
		categoryIndex: 0,
	},
	onChange(e) {
		this.setData({
			categoryIndex:e.detail
		})
	},
	getCategoryList() {
		const db = wx.cloud.database()
		db.collection('category').get().then(res => {
			console.log(res)
			this.setData({
				categoryList: res.data
			})
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (res) {
		this.getCategoryList()
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},
	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {},
});
