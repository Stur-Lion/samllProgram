//index.js
//获取应用实例
const app = getApp()

var common = require("../../utils/common.js");

Page({
  data: {
    countryCodes: ["+86", "+80", "+84", "+87"],
    countryCodeIndex: 0,
    usertelephone: '13200136698'
  },
  bindCountryCodeChange: function (e) {
    this.setData({
      countryCodeIndex: e.detail.value
    })
  },
  bindTel: function () {
    if(common.validFrom('telephone',this.data.usertelephone,'')=='true'){
      this.openToast('请输入正确手机号','info')
    }else{
      wx.navigateTo({
        url: '../verificationCode/code?tel=' + this.data.usertelephone
      })
    }
  },
  usertel: function (e) {
    this.setData({
      usertelephone: e.detail.value
    })
  },
  openToast: function (notice,icon) {
    wx.showModal({
      title: '提示',
      showCancel: false,
      content: '手机号输入不合法',
      success: function (res) {
        console.log(res)
      }
    })
  },
})
