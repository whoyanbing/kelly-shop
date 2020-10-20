const app = getApp();
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		categoryList: [],
		subCategoryList: [],
		categoryIndex: 0,
	},
	onChange(e) {
		const id = e.currentTarget.dataset.id
		this.getSubCategoryList(id)
	},
	getCategoryList() {
		const db = wx.cloud.database()
		db.collection('category').get().then(res => {
			this.setData({
				categoryList: res.data
			})
			this.getSubCategoryList(res.data[0].category_id)
		})
	},
	getSubCategoryList(id) {
		const db = wx.cloud.database()
		db.collection('category').where({
			category_id: id
		}).get().then(res => {
			this.setData({
				subCategoryList: res.data
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
