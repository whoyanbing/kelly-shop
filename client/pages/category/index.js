const app = getApp();
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		categoryList: [{
			id: '2121',label: '全部商品',
		},
		{
			id: '2121',label: '护肤',
		},
		{
			id: '2121',label: '香水',
		},
		{
			id: '2121',label: '洗护',
		},
		{
			id: '2121',label: '彩妆',
		},
		{
			id: '2121',label: '面膜',
		}],
		subCategoryList: [{
			label:'护肤套装',icon: '/images/1-001.png',
		},
		{
			label:'防晒隔离',icon: '/images/1-001.png',
		},
		{
			label:'男士护肤', icon: '/images/1-001.png',
		},
		{
			label:'水乳面霜',icon: '/images/1-001.png',
		}],
		categoryIndex: 0,
	},
	onChange(event) {
		this.setData({
			categoryIndex: event.detail
		})
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (res) {},
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
