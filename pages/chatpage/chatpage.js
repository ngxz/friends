// pages/chatpage/chatpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	  text:'',//初始文本域文字为空
	  sendBtn:false,//初始不显示发送
  },
  /**
   * 失去焦点获取文本域内容
   * 显示发送按钮
   */
	gettext:function(e){
		var text = e.detail.value;
		// if(text != ''){
			this.setData({
				sendBtn:true,
			})
		// }
		// this.setData({
		// 	text:text,
		// })
	},
	/**
	 * 获得焦点，输入内容
	 * 隐藏发送按钮
	 */
	inputtext:function(){
		this.setData({
			sendBtn: false,
		})
	},
	/**
	 * 检测输入状态
	 * 有内容显示发送按钮
	 */
	bindtext:function(e){
		var text = e.detail.value;
		if (text != '') {
			this.setData({
				sendBtn: true,
			})
		}
		this.setData({
			text: text,
		})
		// console.log(this.data.text);
	},
	/**
	 * 点击发送后触发
	 * 发送文字
	 */
	sendbtn:function(){
		//发送内容
		console.log(this.data.text);
		//发送完成后清空输入框
		this.setData({
			text:'',
		})
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