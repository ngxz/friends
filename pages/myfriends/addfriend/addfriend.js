// pages/myfriends/addfriend/addfriend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  index:0,//性别初始不限
	  gender:['男','女'],
	  region: ['不限', '不限', '不限'],//地区初始不限
	  multiIndex:[0,0],//年龄初始不限
	  multiArray: [['不限', '0', '1', '2', '3', '4', '5', '6'], ['不限', '0', '1', '2', '3', '4', '5', '6']],
  },
  /**
   * 选择性别
   */
	genderchange:function(e){
		this.setData({
			index:e.detail.value,
		})
	},
	/**
	 * 选择年龄
	 */
	bindMultiPickerChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			multiIndex: e.detail.value
		})
	},
	/**
	 * 选择地区
	 */
	bindRegionChange: function (e) {
		console.log('picker发送选择改变，携带值为', e.detail.value)
		this.setData({
			region: e.detail.value
		})
	},
	/**
	 * 点击确认，开始搜索
	 */
	bindsearch:function(){
		//3个条件能正常获取
		console.log(this.data.index);
		console.log(this.data.multiIndex);
		console.log(this.data.region);
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