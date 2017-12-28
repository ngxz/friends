//app.js
var wxToast = require('/pages/plus/toast/toast.js')
var homeurl = "";
App({
	wxToast,
	onLaunch: function () {
		var that = this;
		let extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {}
		that.data.comid = extConfig.comid
		that.data.appid = extConfig.appid
		that.data.appname = extConfig.appname
		that.data.indexurl = extConfig.indexurl
		that.data.codetype = extConfig.codetype
		that.data.color = extConfig.color
		this.getUserInfo();

	},
	data: {
		host: homeurl + "/getindex/",
		hostguanwang: homeurl + "/guanwang/",
		hostmall: homeurl + "/mall/",
		hostmalluser: homeurl + "/malluser/",
		hostmember: homeurl + "/member/",
		hostupload: homeurl + "/Uploadimg/",
		hostfood: homeurl + "/food/",
		hostms: homeurl + "/miaosha/",
		hostpt: homeurl + "/pintuan/",
		hostdashang: homeurl + "/dashang/",
		hostyuyue: homeurl + "/yuyue/",
		hostpaimai: homeurl + "/paimai/",
		comid: null,
		indexurl: null,
		regsms: 0,
		appid: null,
		openid: null,
		tuandui: null,
		appname: null,
		codetype: null,
	},
	getUserInfo: function (cb) {
		var that = this

		if (this.globalData.userInfo) {
			typeof cb == "function" && cb(this.globalData.userInfo)
		} else {
			//调用登录接口
			wx.getUserInfo({
				withCredentials: false,
				success: function (res) {
					that.globalData.userInfo = res.userInfo
					typeof cb == "function" && cb(that.globalData.userInfo)
				}
			})
		}
	},
  globalData: {
    userInfo: null
  }
})